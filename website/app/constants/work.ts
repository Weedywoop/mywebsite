import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020',
    title: 'Bundestag',
    subtitle: 'Political Internship: Office of Paul Ziemiak & Angela Merkel',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'Gymnasium',
    subtitle: 'Abitur: Secondary School Diploma',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2023',
    title: 'HWR Berlin',
    subtitle: 'BA Business Administration, Expected average grade: 1.2',
    position: 'right',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'EY',
    subtitle: 'Consulting Intern: Data Analysis & Strategy',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'TU Berlin',
    subtitle: 'BSc Mathematics: Dual studies alongside BA',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-1, 2, -14),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Building...',
    subtitle: 'Analyst. Reformer. Mathematician.',
    position: 'left',
  }
]