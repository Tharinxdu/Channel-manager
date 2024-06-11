/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Revenue as PrismaRevenue } from "@prisma/client";

export class RevenueServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RevenueCountArgs, "select">): Promise<number> {
    return this.prisma.revenue.count(args);
  }

  async revenues<T extends Prisma.RevenueFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RevenueFindManyArgs>
  ): Promise<PrismaRevenue[]> {
    return this.prisma.revenue.findMany<Prisma.RevenueFindManyArgs>(args);
  }
  async revenue<T extends Prisma.RevenueFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RevenueFindUniqueArgs>
  ): Promise<PrismaRevenue | null> {
    return this.prisma.revenue.findUnique(args);
  }
  async createRevenue<T extends Prisma.RevenueCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RevenueCreateArgs>
  ): Promise<PrismaRevenue> {
    return this.prisma.revenue.create<T>(args);
  }
  async updateRevenue<T extends Prisma.RevenueUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RevenueUpdateArgs>
  ): Promise<PrismaRevenue> {
    return this.prisma.revenue.update<T>(args);
  }
  async deleteRevenue<T extends Prisma.RevenueDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RevenueDeleteArgs>
  ): Promise<PrismaRevenue> {
    return this.prisma.revenue.delete(args);
  }
}
