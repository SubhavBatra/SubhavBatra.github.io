import type { IconType } from 'react-icons'
import {
  SiCplusplus,
  SiDocker,
  SiDvc,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiMlflow,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSanity,
  SiSharp,
  SiSolidity,
  SiApachespark,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbBrandMysql, TbCode, TbSql } from 'react-icons/tb'

export type TechMeta = {
  icon: IconType
  color: string
}

const techMap: Record<string, TechMeta> = {
  'C++': { icon: SiCplusplus, color: '#00599C' },
  'C#': { icon: SiSharp, color: '#512BD4' },
  Python: { icon: SiPython, color: '#3776AB' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  SQL: { icon: TbSql, color: '#336791' },
  Swift: { icon: SiSwift, color: '#F05138' },
  React: { icon: SiReact, color: '#61DAFB' },
  FastAPI: { icon: SiFastapi, color: '#009688' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Express: { icon: SiExpress, color: '#FFFFFF' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Spark: { icon: SiApachespark, color: '#E25A1C' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Terraform: { icon: SiTerraform, color: '#844FBA' },
  AWS: { icon: FaAws, color: '#FF9900' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  Git: { icon: SiGit, color: '#F05032' },
  MLflow: { icon: SiMlflow, color: '#0194E2' },
  DVC: { icon: SiDvc, color: '#945DD6' },
  MySQL: { icon: TbBrandMysql, color: '#4479A1' },
  Solidity: { icon: SiSolidity, color: '#363636' },
  'Sanity.io': { icon: SiSanity, color: '#F03E2F' },
}

const fallback: TechMeta = { icon: TbCode, color: '#38bdf8' }

export function getTechMeta(name: string): TechMeta {
  return techMap[name] ?? fallback
}

export const marqueeTechs = [
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'AWS',
  'Docker',
  'Node.js',
  'MongoDB',
  'Terraform',
  'Git',
] as const
