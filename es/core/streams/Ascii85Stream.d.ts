import DecodeStream from 'src/core/streams/DecodeStream';
import { StreamType } from 'src/core/streams/Stream';
declare class Ascii85Stream extends DecodeStream {
    private stream;
    private input;
    constructor(stream: StreamType, maybeLength?: number);
    protected readBlock(): void;
}
export default Ascii85Stream;
//# sourceMappingURL=Ascii85Stream.d.ts.map