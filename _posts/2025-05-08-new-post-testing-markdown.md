---
layout: post
title: testing markdown
---

## Markdown amigos

...look at this screenshot

![Pic](/assets/img/Dashboard 2.png)

mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

Task list

- [ ] step 1
- [ ] step 2
- [x] step 3

<details>
    <summary>Q1: What is the best</summary>
    A1: Opensource.com<br>A2: Otro.com<br>A3: Otherone.com<br>
</details><br>

| Header 1 | Header 2 | Header 3 |
|---|---|---|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
|---|---|---|---|---|---|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 | Row 1, Col 4 | Row 1, Col 5 | Row 1, Col 6 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 | Row 2, Col 4 | Row 2, Col 5 | Row 2, Col 6 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 | Row 3, Col 4 | Row 3, Col 5 | Row 3, Col 6 |
| Row 4, Col 1 | Row 4, Col 2 | Row 4, Col 3 | Row 4, Col 4 | Row 4, Col 5 | Row 4, Col 6 |
| Row 5, Col 1 | Row 5, Col 2 | Row 5, Col 3 | Row 5, Col 4 | Row 5, Col 5 | Row 5, Col 6 |
| Row 6, Col 1 | Row 6, Col 2 | Row 6, Col 3 | Row 6, Col 4 | Row 6, Col 5 | Row 6, Col 6 |
| Row 7, Col 1 | Row 7, Col 2 | Row 7, Col 3 | Row 7, Col 4 | Row 7, Col 5 | Row 7, Col 6 |

```mermaid
graph TD
    A[Start] --> B{Decision};
    B -- Yes --> C[Process 1];
    B -- No --> D[Process 2];
    C --> E[End];
    D --> E;
