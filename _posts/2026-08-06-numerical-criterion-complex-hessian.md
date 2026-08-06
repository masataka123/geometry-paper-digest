---
layout: paper
title: "A numerical criterion for complex Hessian type equations on projective manifolds"
title_ja: "射影多様体上の複素 Hessian 型方程式に対する数値的判定法"
authors: "Gao Chen, Sijie Nie, Yulun Xu"
topic: differential-geometry
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_id: "2608.03815v1"
arxiv_url: "https://arxiv.org/abs/2608.03815"
arxiv_submitted: "2026-08-04"
arxiv_updated: "2026-08-04"
summary: >-
  射影多様体上の複素 Hessian 型方程式について、解の存在を部分多様体上の交点数で判定する Nakai--Moishezon 型の基準を与える。強い狭義 right-Noetherian 条件の下での存在・一意性と、一般次数の狭義 right-Noetherian 多項式に対する一様判定を確立し、複素 Hessian 方程式と Hessian 商方程式に適用する。
abstract_en: ""
summary_en: >-
  The paper studies solvability criteria for complex Hessian-type equations on projective manifolds. It relates analytic cone conditions to uniform intersection inequalities over proper subvarieties under right-Noetherian hypotheses. The resulting framework gives existence criteria for complex Hessian and Hessian quotient equations while distinguishing the general lower-degree case, where full solvability remains open.
abstract_source_url: "https://arxiv.org/abs/2608.03815"
abstract_ja: >-
  著者らは、付随する次数 $n$ の多項式が各点で強い狭義 right-Noetherian 条件を満たす複素 Hessian 型方程式に対し、射影多様体のすべての真部分多様体上の交点数による Nakai--Moishezon 型判定法を証明する。さらに任意次数の狭義 right-Noetherian 多項式について、一様な数値的不等式と摂動後の錐条件との同値を示す。この枠組みは複素 Hessian 方程式および Hessian 商方程式を含む。
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.03815v1](https://arxiv.org/abs/2608.03815)
- **著者:** Gao Chen, Sijie Nie, Yulun Xu
- **初回投稿日:** 2026年8月4日
- **カテゴリー:** Differential Geometry (math.DG)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

英語 Abstract は [arXiv の Abstract ページ](https://arxiv.org/abs/2608.03815)を参照されたい。上の `abstract_ja` は、ライセンスに配慮して原論文に基づき独自に記述した日本語要約である。

## 要約

本論文が扱うのは、複素次元 $n$ のコンパクト連結な滑らかな射影多様体 $(M,\chi)$ 上で、$d\leq n$ として

$$
\omega^d\wedge\chi^{n-d}=\sum_{k=0}^{d-1}a_k\omega^k\wedge\chi^{n-k},
\qquad \omega\in[\omega_0]
$$

という複素 Hessian 型方程式の可解性を、部分多様体上の数値的不等式だけで特徴づける問題である。方程式には一変数多項式 $f(x)=x^d-\sum_{k=0}^{d-1}a_kx^k$ が付随し、その最大実根と導多項式の最大実根の並びを制御する right-Noetherian 条件が解析的な錐条件を符号化する。

次数が $n$ で $f$ が各点において強い狭義 right-Noetherian である場合、著者らは積分可能条件の下で、錐条件を満たす滑らかな解の存在・一意性、同じコホモロジー類における錐条件の実現、およびすべての次元 $p<n$ の部分多様体に対する明示的な狭義交点不等式が同値であることを証明する。これは Kähler 錐に対する古典的な Nakai--Moishezon 型の発想を、非線形 Hessian 型方程式へ移す結果である。

さらに $d$ が $n$ 未満でもよい狭義 right-Noetherian 多項式について、不可約解析的部分多様体上で一様な正の下界をもつ交点不等式と、十分小さい任意の定数摂動 $f+\epsilon$ に対応する錐条件を満たす代表の存在との同値が示される。ここで得られるのは一般の方程式に対する直接の解の存在ではなく、摂動された Fang--Ma--Gårding 錐への所属を特徴づける結果であり、$d<n$ の一般の場合の可解性そのものは未解決である。

一方、既知の解析的存在定理と組み合わせられる複素 Hessian 方程式と Hessian 商方程式では、この一様判定が滑らかな解の存在と同値になる。射影性と一様な正値性は不可欠な仮定として残るが、従来の予想に現れた経路全体に沿う条件や、Hessian 商方程式での許容可能な代表の先験的存在を仮定せずに済む点が重要である。

## 背景と問題設定

複素 Monge--Ampère 方程式から $J$ 方程式や複素 Hessian 方程式へ広がる存在問題では、解析的な部分解条件と代数幾何的な交点数条件を結びつけることが中心課題となる。本論文では、$f,f',\ldots,f^{(d-1)}$ の最大実根を $r(f),r(f'),\ldots,r(f^{(d-1)})$ としたとき、それらが存在し、最初の不等号が狭義で

$$
r(f)>r(f')\geq\cdots\geq r(f^{(d-1)})
$$

となる多項式を「狭義 right-Noetherian」と呼ぶ。すべての不等号が狭義の場合が「強い狭義 right-Noetherian」である。この根の条件を多変数への polarization と Fang--Ma--Gårding 錐に翻訳することで、部分多様体上の数値条件と PDE の錐条件を比較する。

## 主結果

### 主定理1（Theorem 1.1）

$(M,\chi)$ を複素次元 $n$ のコンパクト連結な滑らかな射影多様体とする。$c_1,\ldots,c_{n-1}$ は実定数、$c_0$ は $M$ 上の実数値関数とし、

$$
f(x)=x^n-\sum_{k=0}^{n-1}c_k\binom{n}{k}x^k
$$

が各点で強い狭義 right-Noetherian であると仮定する。さらに

$$
\int_M\omega_0^n
=
\int_M\sum_{k=0}^{n-1}c_k\binom{n}{k}\omega_0^k\wedge\chi^{n-k}
$$

を仮定すると、次の三条件は同値である。

1. 方程式
   $$
   \omega^n=\sum_{k=0}^{n-1}c_k\binom{n}{k}\omega^k\wedge\chi^{n-k}
   $$
   は、錐条件を満たす $[\omega_0]$ 内の滑らかな解をただ一つもつ。
2. $[\omega_0]$ 内に錐条件を満たす代表が存在する。
3. 任意の次元 $p<n$ の部分多様体 $V\subset M$ に対して
   $$
   \int_V\frac{n!}{p!}\omega_0^p
   -\sum_{k=n-p}^{n-1}c_k\binom{n}{k}
   \frac{k!}{(k-n+p)!}\omega_0^{k-n+p}\wedge\chi^{n-k}>0
   $$
   が成り立つ。

### 主定理2（Theorem 1.2）

$1\leq d\leq n$ とし、$a_1,\ldots,a_{d-1}$ を実定数とする。$f(x)=x^d-\sum_{k=0}^{d-1}a_kx^k$ が狭義 right-Noetherian で、積分可能条件

$$
\int_M\omega_0^d\wedge\chi^{n-d}
=
\int_M\sum_{k=0}^{d-1}a_k\omega_0^k\wedge\chi^{n-k}
$$

を満たすとする。このとき、ある $\epsilon_0>0$ が存在して、すべての $n-d\leq p<n$ と任意の $p$ 次元不可約解析的部分多様体 $V\subset M$ に対し

$$
\int_V\frac{d!\,\omega_0^{d-n+p}\wedge\chi^{n-d}}{(d-n+p)!}
-\sum_{k=n-p}^{d-1}\frac{k!a_k\,\omega_0^{k-n+p}\wedge\chi^{n-k}}{(k-n+p)!}
\geq\epsilon_0\int_V\chi^p
$$

が成り立つことと、十分小さい任意の $\epsilon>0$ に対して $[\omega_0]$ が $f(x)+\epsilon$ の polarization に付随する錐 $\Upsilon_{F_\epsilon}$ と交わることは同値である。

複素 Hessian 商方程式への適用である Corollary 1.3 は、$0<l<k\leq n$ の全範囲で、一様な二組の部分多様体積分不等式と滑らかな解の存在を同値にする。また Corollary 1.5 は複素 $k$-Hessian 方程式について、$[\omega]$ に $\Gamma_k$-許容な代表があること、規格化条件を満たす任意の滑らかな右辺に対して滑らかな解があること、および全ての $n-k\leq p<n$ における一様交点不等式を同値にする。

## 証明の見取り図

まず right-Noetherian 多項式を polarization によって Fang--Ma--Gårding 多項式へ移し、導関数の最大実根の比較から対応する錐の包含関係を得る。Section 3 の錐包含補題がこの代数的部分を担い、それを既知の複素 Hessian 方程式の存在結果と組み合わせて Section 4 の二つの系を導く。

Theorem 1.2 は Section 5 で Theorem 1.1 に帰着される。Theorem 1.1 の存在方向は連続法で扱われ、Section 7 の mass concentration によって必要な正値性を確保し、閉性を局所延長問題へ還元する。最後に Section 9 の延長定理を用いて連続路を閉じることで、数値条件から錐条件を満たす滑らかな解を構成する。

## 原論文との対応

- Background / Introduction: Section 1, pp. 1--6
- Main theorem 1: Theorem 1.1, pp. 2--3
- Main theorem 2: Theorem 1.2, p. 3
- Hessian quotient application: Corollary 1.3, pp. 3--4
- Complex Hessian application: Corollary 1.5, pp. 4--5
- Cone-inclusion lemmas: Section 3, pp. 12--15
- Proof of Theorem 1.2: Section 5, pp. 15--18
- Proof of Theorem 1.1: Sections 6--9, pp. 18--35
