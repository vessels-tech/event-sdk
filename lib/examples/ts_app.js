"use strict";
/**
 * Example showing how to use EventLogger from TypeScript
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const eventLogger_1 = require("../../src/eventLogger");
const EventMessage_1 = require("../../src/model/EventMessage");
const now = new Date();
const event = {
    from: "noresponsepayeefsp",
    to: "payerfsp",
    id: "aa398930-f210-4dcd-8af0-7c769cea1660",
    content: {
        headers: {
            "content-type": "application/vnd.interoperability.transfers+json;version=1.0",
            date: "2019-05-28T16:34:41.000Z",
            "fspiop-source": "noresponsepayeefsp",
            "fspiop-destination": "payerfsp",
            priority: 100,
            blocking: false
        },
        payload: "data:application/vnd.interoperability.transfers+json;version=1.0;base64,ewogICJmdWxmaWxtZW50IjogIlVObEo5OGhaVFlfZHN3MGNBcXc0aV9VTjN2NHV0dDdDWkZCNHlmTGJWRkEiLAogICJjb21wbGV0ZWRUaW1lc3RhbXAiOiAiMjAxOS0wNS0yOVQyMzoxODozMi44NTZaIiwKICAidHJhbnNmZXJTdGF0ZSI6ICJDT01NSVRURUQiCn0",
        data: {
            str1: 'Hi world',
            number1: 12345,
            date1: now,
            bool1: true,
            nil1: null,
            undef1: undefined,
            array1: ["Hello", 1234, now, true, null, undefined],
            child: {
                str2: 'Hi world',
                number2: 12345,
                date2: now,
                bool2: true,
                nil2: null,
                undef2: undefined,
                array2: ["Hello", 1234, now, true, null, undefined],
            }
        }
    },
    type: "application/json",
    metadata: {
        event: EventMessage_1.EventMetadata.log("3920382d-f78c-4023-adf9-0d7a4a2a3a2f", EventMessage_1.LogEventAction.debug, "2019-05-29T23:18:32.935Z", {
            status: EventMessage_1.EventStatusType.success,
            code: 0,
            description: "action successful"
        }, "1a396c07-47ab-4d68-a7a0-7a1ea36f0012"),
        trace: {
            service: "central-ledger-prepare-handler",
            traceId: "bbd7b2c7-3978-408e-ae2e-a13012c47739",
            parentSpanId: "4e3ce424-d611-417b-a7b3-44ba9bbc5840",
            spanId: "efeb5c22-689b-4d04-ac5a-2aa9cd0a7e87"
        }
    }
};
const logger = new eventLogger_1.EventLogger();
console.log('app: sending event', JSON.stringify(event, null, 2));
logger.log(event)
    .then(result => {
    console.log('app: received back:', JSON.stringify(result, null, 2));
});
//# sourceMappingURL=ts_app.js.map