import { env } from "@/main/config/env";
import { SocketIOAdapter } from "@/infra/adapters";

describe('SocketIOAdapter', () => {
  let event: string
  let data: object

  let sut: SocketIOAdapter;

  beforeEach(() => {
    event = 'any_event'
    data = { key: 'value' };

    sut = SocketIOAdapter.getInstance();
  });

  it('should call method emit of SocketIo with correct values', () => {
    const mockEmit = jest.spyOn(sut.io, 'emit');

    sut.emit({ event, data });

    expect(mockEmit).toHaveBeenCalledWith(event, data);
  });

  it('should call method listen of SocketIo with port correct', () => {
    sut.server.listen = jest.fn()

    sut.listen()

    expect(sut.server.listen).toHaveBeenCalledWith(env.webSocketPort, expect.any(Function))
  })
});
