import { UnexpectedObjectTypeError, UnsupportedEncodingError, } from 'src/core/errors';
import PDFArray from 'src/core/objects/PDFArray';
import PDFDict from 'src/core/objects/PDFDict';
import PDFName from 'src/core/objects/PDFName';
import PDFNumber from 'src/core/objects/PDFNumber';
import Ascii85Stream from 'src/core/streams/Ascii85Stream';
import AsciiHexStream from 'src/core/streams/AsciiHexStream';
import FlateStream from 'src/core/streams/FlateStream';
import LZWStream from 'src/core/streams/LZWStream';
import RunLengthStream from 'src/core/streams/RunLengthStream';
import Stream from 'src/core/streams/Stream';
var decodeStream = function (stream, encoding, params) {
    if (encoding === PDFName.of('FlateDecode')) {
        return new FlateStream(stream);
    }
    if (encoding === PDFName.of('LZWDecode')) {
        var earlyChange = 1;
        if (params instanceof PDFDict) {
            var EarlyChange = params.lookup(PDFName.of('EarlyChange'));
            if (EarlyChange instanceof PDFNumber) {
                earlyChange = EarlyChange.asNumber();
            }
        }
        return new LZWStream(stream, undefined, earlyChange);
    }
    if (encoding === PDFName.of('ASCII85Decode')) {
        return new Ascii85Stream(stream);
    }
    if (encoding === PDFName.of('ASCIIHexDecode')) {
        return new AsciiHexStream(stream);
    }
    if (encoding === PDFName.of('RunLengthDecode')) {
        return new RunLengthStream(stream);
    }
    throw new UnsupportedEncodingError(encoding.asString());
};
export var decodePDFRawStream = function (_a) {
    var dict = _a.dict, contents = _a.contents;
    var stream = new Stream(contents);
    var Filter = dict.lookup(PDFName.of('Filter'));
    var DecodeParms = dict.lookup(PDFName.of('DecodeParms'));
    if (Filter instanceof PDFName) {
        stream = decodeStream(stream, Filter, DecodeParms);
    }
    else if (Filter instanceof PDFArray) {
        for (var idx = 0, len = Filter.size(); idx < len; idx++) {
            stream = decodeStream(stream, Filter.lookup(idx, PDFName), DecodeParms && DecodeParms.lookupMaybe(idx, PDFDict));
        }
    }
    else if (!!Filter) {
        throw new UnexpectedObjectTypeError([PDFName, PDFArray], Filter);
    }
    return stream;
};
//# sourceMappingURL=decode.js.map