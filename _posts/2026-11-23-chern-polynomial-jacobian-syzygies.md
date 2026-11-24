---
layout: paper
title: Chern classes, Poincaré polynomials, and Bernstein-Sato polynomials of plane curves
title_ja: 平面曲線のJacobian関係式束のChern多項式と補集合のEuler数
authors: Piotr Pokora
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: We show that the Poincaré polynomial of a reduced plane curve $C$ is the Chern polynomial of the dual of the bundle of Jacobian syzygies of $C$. Using the Zeuthen-Segre formula, we prove that its value at $t=-1$ equals the Euler number of the complement of $C$ up to the correction term $μ(C)-τ(C)$, so the two numbers coincide if and only if all singularities of $C$ are quasi-homogeneous. As applications, we show that the defect in a combinatorial inequality for free $d$-arrangements is the square of the difference of the exponents, extend the addition technique to arbitrary reduced plane curves, and locate the roots of local Bernstein-Sato polynomials at ordinary singular points.
topic: algebraic-geometry
tags:
- chern-classes
- singularities
- vector-bundles-sheaves
arxiv_id: 2611.27297v1
arxiv_url: https://arxiv.org/abs/2611.27297
arxiv_submitted: '2026-11-20'
arxiv_updated: '2026-11-20'
summary: 被約平面曲線に対し、次数と総Tjurina数から定めたPoincaré多項式をJacobian関係式束の双対のChern多項式と同定する。補集合のEuler数とのずれは総Milnor数と総Tjurina数の差に等しい。
abstract_en: We show that the Poincaré polynomial of a reduced plane curve $C$ is the Chern polynomial of the dual of the bundle of Jacobian syzygies of $C$. Using the Zeuthen-Segre formula, we prove that its value at $t=-1$ equals the Euler number of the complement of $C$ up to the correction term $μ(C)-τ(C)$, so the two numbers coincide if and only if all singularities of $C$ are quasi-homogeneous. As applications, we show that the defect in a combinatorial inequality for free $d$-arrangements is the square of the difference of the exponents, extend the addition technique to arbitrary reduced plane curves, and locate the roots of local Bernstein-Sato polynomials at ordinary singular points.
summary_en: ''
abstract_ja: 平面曲線の特異点の局所不変量が、その補集合のEuler数とベクトル束のChern類を結ぶ。著者はこの関係を使い、自由な曲線配置について既知の組合せ不等式の差を決定し、成分を共有しない曲線を合併するときの加法公式も与える。
abstract_source_url: https://arxiv.org/abs/2611.27297
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.27297v1](https://arxiv.org/abs/2611.27297)
- **著者:** Piotr Pokora
- **初回投稿日:** 2026-11-20
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

曲線配置で観察されていた多項式の因数分解と、補集合のEuler数への特殊化を、任意の被約平面曲線のベクトル束から説明する。

ここでのPoincaré多項式は次数と総Tjurina数を使って定義する二次式である。これがJacobian関係式束の双対のChern多項式になるという同定が出発点である。

多項式を $-1$ で評価した値がそのまま補集合のEuler数になるのは、すべての特異点が準斉次である場合に限る。一般には局所特異点の解析的情報が補正項として残る。

## 背景と問題設定

複素射影平面の次数 $d$ の曲線 $C$ を考え、$\tau(C)$ と $\mu(C)$ をそれぞれ総Tjurina数、総Milnor数とする。自由曲線では関係式束が分裂するため、二つの指数が多項式に現れる。

## 主結果

### 束と補集合の公式（Theorem 1.2）

関係式束を $E\_C$、補集合を $M(C)$ とすると
$$
P(C;t)=1+(d-1)t+\big((d-1)^2-\tau(C)\big)t^2=c\_t(E\_C^\vee),
$$
$$
e(M(C))=P(C;-1)-\mu(C)+\tau(C).
$$
準斉次特異点だけを持つ自由曲線では、指数を $d\_1,d\_2$ として $e(M(C))=(d\_1-1)(d\_2-1)$ となる。

### 配置の組合せ不等式（Theorem 1.4）

次数 $d\ge2$ の滑らかな曲線 $k\ge2$ 本からなる自由な配置で、交点がすべて通常かつ準斉次とする。$n\_r$ が $r$ 重点の個数なら
$$
\sum\_{r\ge2}(r^2-5r+4)n\_r-3-3dk(d-2)=(d\_2-d\_1)^2.
$$

### 曲線の合併（Theorem 1.5）

共通成分のない二つの被約曲線について $r=|C\_1\cap C\_2|$、$\varepsilon=\mu-\tau$ とおく。$P(C\_1\cup C\_2;t)$ は二つの多項式の和に $t-1+(r-1+\varepsilon(C\_1\cup C\_2)-\varepsilon(C\_1)-\varepsilon(C\_2))t^2$ を加えたものである。

### 局所Bernstein–Sato多項式（Theorem 1.6）

通常 $r$ 重点では $b\_{C,p}(-s)$ の根は $j/r$、$2\le j\le2r-2$ の範囲に入り、$2\le j\le\min(r+1,2r-2)$ の根は必ず現れる。

## 証明の見取り図

完全列から関係式束のChern類を計算し、Zeuthen–Segre公式によるEuler数の計算と比較する。自由性による束の分裂を使うと指数の差の平方が現れる。合併に際してはMilnor数とTjurina数の差がどう増減するかを分離する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.27297)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.27297v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.4–1.6, Corollary 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.27297v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
