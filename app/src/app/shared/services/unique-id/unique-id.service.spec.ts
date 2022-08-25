import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service!: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix.`, () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times.`, () => {
    const ids = new Set();

    const maxCount = 50;

    for (let i = 0; i < maxCount; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(true).toBeTruthy
    expect(ids.size).toBe(maxCount);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called.`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should throw when called with null.`, () => {
    const emptyValues = [ null, undefined, '', '0', '1'];

    emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue))
            .withContext(`Empty value -> '${emptyValue}'`)
            .toThrow();
    });    
  });


});
