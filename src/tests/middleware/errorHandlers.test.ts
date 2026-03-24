import { notFound, errorHandler, validateId } from "../../middleware/errorHandlers";

describe("middleware tests", () => {
  const mockRes = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  const mockNext = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 with path", () => {
    const req: any = { originalUrl: "/unknown" };
    const res = mockRes();

    notFound(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "Route not found",
      path: "/unknown",
    });
  });

  it("should return 500 on error", () => {
    const err = new Error("test error");
    const req: any = {};
    const res = mockRes();

    errorHandler(err, req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal server error",
    });
  });

  it("should return 400 for invalid id", () => {
    const req: any = { params: { id: "abc" } };
    const res = mockRes();

    validateId(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid seashell ID",
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should call next for valid id", () => {
    const req: any = { params: { id: "1" } };
    const res = mockRes();

    validateId(req, res, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });
});