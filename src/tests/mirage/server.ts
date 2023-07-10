import { createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
    return createServer({
        environment,
    });
}
