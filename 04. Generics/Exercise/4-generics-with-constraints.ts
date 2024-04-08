function processNumeric<T extends number | bigint>(input: T): T {
    return input;
}

processNumeric(100);
processNumeric(100n);