import DecodeStream from 'src/core/streams/DecodeStream';
import { StreamType } from 'src/core/streams/Stream';
declare class RunLengthStream extends DecodeStream {
    private stream;
    constructor(stream: StreamType, maybeLength?: number);
    protected readBlock(): void;
}
export default RunLengthStream;
//# sourceMappingURL=RunLengthStream.d.ts.map