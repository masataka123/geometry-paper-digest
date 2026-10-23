---
layout: paper
title: Positivity of supercritical LYZ pairs
title_ja: 超臨界LYZ対から生じる正値性とHodge–Riemann関係
authors: Bowen Liu, Mao Sheng, Shing-Tung Yau
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We introduce the roots of supercritical Leung--Yau--Zaslow pairs and prove pointwise strong positivity of the associated Schur forms. The resulting LYZ cones contain the pliant cone on smooth projective threefolds, with strict inclusion on a Fujino--Sato threefold. We also establish Hard Lefschetz and Hodge--Riemann relations for the associated Chern classes on compact K\"ahler manifolds in bidegrees $1\le p+q\le\dim X$ with $\min\{p,q\}\le1$.
topic: algebraic-geometry
tags:
- positivity
- chern-classes
- hodge-theory
arxiv_id: 2610.31233v1
arxiv_url: https://arxiv.org/abs/2610.31233
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: 超臨界Leung–Yau–Zaslow方程式の解から、実(1,1)類の組とその特性類を構成する論文である。Schur形式の点ごとの強正値性、射影三次元多様体上のpliant coneとの比較、一定の双次数でのHard Lefschetz・Hodge–Riemann関係を示す。方程式の可解性が与える正値性を、高余次元の類の幾何へ結びつける。
abstract_en: ''
summary_en: The paper develops characteristic classes from solutions of the supercritical Leung–Yau–Zaslow equation. It relates their positivity to cones of higher-codimension classes on projective threefolds. The cohomological results also recover a Lefschetz package in dimensions three and four, while the general-dimensional statement remains conjectural.
abstract_ja: 超臨界Leung–Yau–Zaslow対の根を導入し、それらから得られるSchur形式が点ごとに強正であることを示す。構成されるLYZ錐は滑らかな射影三次元多様体上でpliant coneを含み、Fujino–Satoの例では包含が真になる。またコンパクトKähler多様体上で、関連するChern類について、1≤p+q≤dim Xかつmin{p,q}≤1の双次数におけるHard Lefschetz定理とHodge–Riemann関係を証明する。
abstract_source_url: https://arxiv.org/abs/2610.31233
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31233v1](https://arxiv.org/abs/2610.31233)
- **著者:** Bowen Liu, Mao Sheng, Shing-Tung Yau
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

LYZ方程式は、ミラー対称性の半平坦な状況で特殊Lagrange条件を線束の接続の方程式へ移したものとして現れる。本論文は、その超臨界解が持つ正値性を、部分多様体上の積分不等式だけでなく特性類の体系として理解する。

鍵は、解をなす二つの実(1,1)形式から有限個の「根」を作ることである。その基本対称式は既知の可解性判定に現れる類と対応し、さらに一般のSchur式も点ごとに強い正値性を持つ。これにより、方程式から高余次元の正値錐を構成できる。

射影三次元の場合、この錐は大域生成ベクトル束から作るpliant coneを含み、両者が一致しない例も得られる。さらにChern類にHard Lefschetz・Hodge–Riemann関係を与える。ただし任意次元での完全なKähler packageは予想として区別され、証明される双次数には制限がある。

## 背景と問題設定

$X$を複素次元$n\geq2$のコンパクトKähler多様体、$\omega$をKähler形式、$\alpha$を閉実(1,1)形式とする。$\omega$に関する$\alpha$の固有値を$\lambda\_i$とすると、対象の方程式は

$$
\sum\_{i=1}^{n}\operatorname{arccot}\lambda\_i(x)=\theta\in(0,\pi),\qquad x\in X
$$

である。ここで$\operatorname{arccot}:\mathbb R\to(0,\pi)$という枝を使う。解を持つコホモロジー対に対し、LYZ根類を

$$
R\_{[\alpha],[\omega]}=\lbrace [D\_0],\ldots,[D\_{n-2}]\rbrace ,\qquad
[D\_j]=[\alpha]-\cot\negthinspace \left(\frac{\theta+j\pi}{n-1}\right)[\omega]
$$

と定める。$c\_m$はこれらの根の基本対称式、$s\_\nu$はSchur式である。実際のベクトル束が存在すると主張する構成ではなく、まず実コホモロジー類の組に特性類の演算を施す。

既知のNakai–Moishezon型判定は、$[\alpha]$と$[\omega]$の斉次式が部分多様体に対し正となることを可解性に結びつける。本論文では、その式を正の規格化定数を除いて根類のChern類として整理する。

## 主結果

### Schur形式の強正値性（Theorem 2.10）

超臨界LYZ方程式を満たす代表形式から作るSchur形式は、点ごとに強正値性を持つ。Introductionでは概略として次のように述べられている。既知のChern形式$c\_m(\alpha,\omega)$の正値性をSchur形式$s\_\nu(\alpha,\omega)$へ拡張するものであり、個々の根がKähler類であることを仮定して得る結論ではない。

### 正値錐の包含と真の包含（Theorems 2.11, 2.20）

$C^m\_{\mathrm{LYZ}}(X)$を、超臨界対のSchur類の積で総次数$m$となるものが生成する閉凸錐とする。この錐はnefな(1,1)類の積が生成する錐を含み、$m$次元解析的部分多様体と非負に交わる類の錐に含まれる。

滑らかな射影三次元多様体については、より具体的に

$$
S^2\operatorname{Nef}^1(X)\subseteq\operatorname{PL}^2(X)
\subseteq C^2\_{\mathrm{LYZ}}(X)\cap N^2(X)\_{\mathbb R}
\subseteq\operatorname{Nef}^2(X)
$$

が成り立つ。$\operatorname{PL}^2(X)$は大域生成束のSchur類の積から得るpliant cone、$N^2(X)\_{\mathbb R}$は数値的余次元2類の空間である。Fujino–Satoの滑らかな射影トーリック三次元多様体では、pliant coneからLYZ錐への包含が真になる。したがって、LYZ方程式はpliant coneだけでは捉えられない正値類を与える。

### Lefschetz型構造（Theorem 3.4、Corollary 3.5）

根類のChern類について、

$$
1\leq p+q\leq n,\qquad \min\lbrace p,q\rbrace \leq1
$$

という双次数でHard Lefschetz定理とHodge–Riemann関係が成り立つ。Introductionでは概略として次のように述べられている。これから複素次元3、4ではLefschetz分解を含むKähler packageが得られる。任意次元への拡張はConjecture 3.6であり、本論文で全双次数が解決されたわけではない。

## 証明の見取り図

Introductionは、根類を用いて可解性の斉次式を特性類へ組織化し、Schur正値性から錐の比較へ進む構成を説明する。射影三次元での包含には、豊富ベクトル束のChern類が持つHodge–Riemann性を用いる。この対応が、LYZ根類自身に対して同じ型のコホモロジー構造を調べる動機にもなる。本文は根の構成、正値性と錐の比較、Hodge–Riemann関係の順に進む。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31233)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31233v1) — 番号のないIntroduction、PDF pp. 2–3。
- **Introduction中で言及された主要結果:** Theorems 2.10, 2.11, 2.20, 3.4、Corollary 3.5、Conjecture 3.6。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31233v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
