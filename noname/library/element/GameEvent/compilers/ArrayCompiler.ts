import ContentCompilerBase from "./ContentCompilerBase.ts";
import { EventCompiledContent, EventContent } from "./IContentCompiler.ts";

export default class ArrayCompiler extends ContentCompilerBase {
    type = "array";

    filter(content: EventContent): boolean {
        return Array.isArray(content);
    }

    compile(content: EventContent): EventCompiledContent {
        if(!Array.isArray(content))
            throw new ReferenceError("content必须是一个数组");

        const compiled: EventCompiledContent = async (event) => {
            if (!Number.isInteger(event.step))
                event.step = 0;

            while (!event.finished) {
                if (event.step >= content.length){
                    event.finish();
                    break;
                }
                this.beforeExecute(event);
                event.step ++;
                let result: Result | undefined;
                if (!this.isPrevented(event)) {
                    const original = content[event.step];
                    const next = await Reflect.apply(original, event, [event, event._trigger, event.player]);
                    result = next && next.result;
                }
                const nextResult = await event.waitNext();
                event._result = result || nextResult || event._result;
                this.afterExecute(event);
            }
        };
        compiled.type = this.type;
        compiled.original = content;
        return compiled;
    }
}