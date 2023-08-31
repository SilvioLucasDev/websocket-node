import { env } from "@/main/config/env";
import { SocketIOAdapter } from "@/infra/adapters";

import express from 'express'

describe('SocketIOAdapter', () => {
  let event: string
  let data: object

  let sut: SocketIOAdapter;
  let app: any

  beforeAll(()=>{
    event = 'any_event'
    data = { key: 'value' };
  })

  beforeEach(() => {
    app = express()
    sut = SocketIOAdapter.getInstance(app);
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
