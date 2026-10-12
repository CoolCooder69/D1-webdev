import type { LucideIcon } from "lucide-react";
import z from "zod";

export interface Article {
  Name: string;
  Description: string;
  Example: string;
  AuthorName: string;
  ArticleImg: string;
  Stars: string;
}

export interface NavLink {
  title: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const emailSchema = z.string().email({ error: "Invalid Email." });
