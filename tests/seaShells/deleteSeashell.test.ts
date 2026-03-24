import { deleteSeashell } from "../../src/api/seashells/deleteSeashell";
import { prisma } from "../../src/prisma";

jest.mock("../../src/prisma", () => ({
  prisma: {
    seashell: {
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe("deleteSeashell", () => {
  const mockRes = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete seashell and return 204", async () => {
    const req: any = { params: { id: "1" } };
    const res = mockRes();

    (prisma.seashell.findUnique as jest.Mock).mockResolvedValue({ id: 1 });
    (prisma.seashell.delete as jest.Mock).mockResolvedValue({});

    await deleteSeashell(req, res);

    expect(prisma.seashell.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(prisma.seashell.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });

  it("should return 404 if seashell not found", async () => {
    const req: any = { params: { id: "1" } };
    const res = mockRes();

    (prisma.seashell.findUnique as jest.Mock).mockResolvedValue(null);

    await deleteSeashell(req, res);

    expect(prisma.seashell.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(prisma.seashell.delete).not.toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "Seashell not found",
    });
  });
});