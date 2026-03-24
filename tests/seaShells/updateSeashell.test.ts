import { updateSeashell } from "../../src/api/seashells/updateSeashell";
import { prisma } from "../../src/prisma";

jest.mock("../../src/prisma", () => ({
  prisma: {
    seashell: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe("updateSeashell", () => {
  const mockRes = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update seashell and return updated object", async () => {
    const req: any = {
      params: { id: "1" },
      body: { name: "Updated Shell" },
    };
    const res = mockRes();

    (prisma.seashell.findUnique as jest.Mock).mockResolvedValue({ id: 1 });
    (prisma.seashell.update as jest.Mock).mockResolvedValue({
      id: 1,
      name: "Updated Shell",
    });

    await updateSeashell(req, res);

    expect(prisma.seashell.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(prisma.seashell.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: req.body,
    });

    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      name: "Updated Shell",
    });
  });

  it("should return 404 if seashell not found", async () => {
    const req: any = {
      params: { id: "1" },
      body: { name: "Updated Shell" },
    };
    const res = mockRes();

    (prisma.seashell.findUnique as jest.Mock).mockResolvedValue(null);

    await updateSeashell(req, res);

    expect(prisma.seashell.update).not.toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "Seashell not found",
    });
  });
});