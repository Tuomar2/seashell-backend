import { getSeashellById } from "../../src/api/seashells/getSeashell";
import { prisma } from "../../src/prisma";

jest.mock("../../src/prisma", () => ({
  prisma: {
    seashell: {
      findUnique: jest.fn(),
    },
  },
}));

describe("getSeashellById", () => {
  const mockRes = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  // ✅ Success case
  it("should return seashell if found", async () => {
    const req: any = { params: { id: "1" } };
    const res = mockRes();

    const mockShell = { id: 1, name: "Test Shell" };

    (prisma.seashell.findUnique as jest.Mock).mockResolvedValue(mockShell);

    await getSeashellById(req, res);

    expect(prisma.seashell.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(res.json).toHaveBeenCalledWith(mockShell);
  });

  // ❌ Not found case
  it("should return 404 if seashell not found", async () => {
    const req: any = { params: { id: "1" } };
    const res = mockRes();

    (prisma.seashell.findUnique as jest.Mock).mockResolvedValue(null);

    await getSeashellById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "Seashell not found",
    });
  });
});