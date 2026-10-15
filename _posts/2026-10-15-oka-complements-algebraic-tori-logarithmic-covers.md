---
layout: paper
title: Oka complements in algebraic tori and their logarithmic covers
title_ja: 代数的トーラスの補集合と対数被覆のOka性
authors: Yun-Heng Du, Bin Guo, Peng-Chao Wang, Song-Yan Xie
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Suppose $n\ge2$ and $K\subset\C^n$ is compact and polynomially convex. Write $q(z)=(e^{-iz_1},\ldots,e^{-iz_n})$, $X_K=(\C^*)^n\setminus(K\cap(\C^*)^n)$, and $Y_K=\C^n\setminus q^{-1}(K)$. We prove that $X_K$ and its logarithmic covering $Y_K$ are Oka. More strongly, $Y_K$ admits normalized holomorphic families of entire embeddings through prescribed holomorphic sections. The proof combines polynomial pair Hamiltonian transport in multiplicative coordinates, compatible with the coordinate hyperplanes, with a fixed Fatou--Bieberbach model. Applications include Oka slab crosses over arbitrary nonempty connected planar domains, complements of periodic equal-radius Euclidean balls centered at products of planar lattices, and complements of sufficiently small closed metric balls in products of elliptic curves.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
arxiv_id: 2610.15433v1
arxiv_url: https://arxiv.org/abs/2610.15433
arxiv_submitted: '2026-10-11'
arxiv_updated: '2026-10-11'
summary: 複素Euclid空間のコンパクト多項式凸集合を代数的トーラスから除いた補集合と、その対数被覆のOka性を示す。指定された正則切断を通る一次微分まで正規化された整埋込みの族を構成し、平面領域のslab crossや格子状に並ぶ閉球の補集合へ応用する。
abstract_en: ''
summary_en: The paper studies obstacles in an algebraic torus by lifting them to its logarithmic covering space. A family of normalized entire embeddings gives a stronger result than the Oka property alone. The construction accommodates compact sets that meet several coordinate hyperplanes, whose logarithmic inverse images can be unbounded. Applications include periodic ball complements and the removal of a small metric ball from a product of elliptic curves.
abstract_ja: コンパクト多項式凸集合を複素代数的トーラスから除くとき、その補集合と対数被覆がOkaとなることを示す。対数被覆上では、指定された正則切断を通り、原点での微分を恒等写像とする整埋込みの族まで構成する。座標超平面に接する障害物とその非有界な逆像を制御することが核心となる。これを任意の連結平面領域からなるslab cross、積格子上の等半径球の補集合、楕円曲線の積から小さな閉球を除いた空間へ適用する。
abstract_source_url: https://arxiv.org/abs/2610.15433
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.15433v1](https://arxiv.org/abs/2610.15433)
- **著者:** Yun-Heng Du, Bin Guo, Peng-Chao Wang, Song-Yan Xie
- **初回投稿日:** 2026-10-11
- **最終更新日:** 2026-10-11
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka多様体から閉集合を除く操作は、必ずしもOka性を保たない。特に無限個の障害物が周期的に並ぶ場合や、複素トーラスから球を除く場合には、補集合内で正則写像をどのように動かせるかが問題となる。本論文は代数的トーラスとその対数被覆を通じて、これらを共通の構成で扱う。

中心となる結果は、$\mathbb C^n$のコンパクト多項式凸集合$K$について、$(\mathbb C^{\ast})^n$内の補集合とその対数被覆がOkaとなることである。さらに被覆上では、指定された正則切断を通る整埋込みの族を作り、一次微分まで正規化する。

$K$が座標超平面と交わる場合、トーラス内の障害物はコンパクトとは限らず、対数被覆の障害物も非有界となる。複数の座標超平面をまたぐ制御が従来の構成に対する新しい点である。応用では、slab cross、平面格子の積に並ぶ閉球の補集合、楕円曲線の積の小さな閉球の補集合を得る。

## 背景と問題設定

$n\ge2$とし、

$$
q(z)=(e^{-iz_1},\ldots,e^{-iz_n}),\quad E_K=q^{-1}(K),\quad Y_K=\mathbb C^n\setminus E_K,\quad X_K=(\mathbb C^{\ast})^n\setminus(K\cap(\mathbb C^{\ast})^n)
$$

とおく。$q:Y_K\to X_K$は対数被覆である。Introductionは、離散集合を中心とする等半径球の補集合に関するKusakabeの問いと、複素トーラスから小さな球を除くForstneričの問いを出発点に挙げる。本論文が直接扱うのは、前者では平面格子の積、後者では平坦な積計量を備える楕円曲線の積であり、任意の離散集合や任意の複素トーラス全体に答えるとは主張しない。

## 主結果

### 対数被覆のOka性と正規化された族（Theorem 1.1）

$K\subset\mathbb C^n$がコンパクトかつ多項式凸なら、$X_K$と$Y_K$は非空・弧状連結でOkaとなる。さらにコンパクト凸集合$L_0\subset\mathbb C^m$の近傍$U_0$からの正則写像$f:U_0\to Y_K$に対し、$L_0$の近傍$V\subset U_0$と正則写像

$$
F:V\times\mathbb C^n\longrightarrow Y_K,\qquad F(\zeta,0)=f(\zeta),\qquad D_\xi F(\zeta,0)=I_n
$$

が存在し、各$F(\zeta,\cdot)$はその像への双正則写像となる。したがって単なる近似可能性より強く、切断を通り一次jetを指定した整埋込みの族が得られる。$E_K\ne\varnothing$なら像は障害物を避けるFatou–Bieberbach領域である。

### 任意の平面領域のslab cross（Theorem 1.2）

非空の連結平面領域$U_1,\ldots,U_n\subset\mathbb C$に対し、

$$
S(U_1,\ldots,U_n)=\bigcup_{j=1}^n\mathbb C^{j-1}\times U_j\times\mathbb C^{n-j}
$$

はOkaである。各$U_j$の有界性や境界の正則性は仮定しない。既存の結果から得られるOka-1性を完全なOka性へ強める。たとえば$\{z:\min_j|z_j|<1\}$が含まれ、二次元では$(\Delta\times\mathbb C)\cup(\mathbb C\times\Delta)$となる。

### 格子状の等半径閉球（Theorem 1.3）

各$\Lambda_j\subset\mathbb C$を階数2の格子とし、$\Lambda=\Lambda_1\times\cdots\times\Lambda_n$、

$$
\ell_j=\min_{0\ne\lambda\in\Lambda_j}|\lambda|,\qquad\ell=\min_j\ell_j
$$

とおく。積ユークリッドノルムを使い、$0<2r<\ell$ならば

$$
\mathbb C^n\setminus\bigcup_{\lambda\in\Lambda}\overline{B(\lambda,r)}
$$

はOkaである。半径条件は異なる球が離れることに対応する。無限の周期的障害物を座標ごとの反転でコンパクト化し、その閉包の多項式凸性を示すことが新しい主要な段階となる。

### 楕円曲線の積から球を除く（Corollary 1.4）

$T=(\mathbb C/\Lambda_1)\times\cdots\times(\mathbb C/\Lambda_n)$に平坦な積計量を入れる。任意の$c\in T$と$0<r<\ell/2$について、閉計量球$\overline{B_T(c,r)}$の補集合はOkaとなる。$\ell/2$は単射半径であり、この条件の下で球の逆像が前定理の周期的閉球の集合に一致する。

## 証明の見取り図

Introductionは三段階の構成を説明する。まず乗法座標で多項式pair Hamiltonianを使い、座標超平面を越えて延長する完備な流れを作る。次に蓄積変位を記録する変数を導入し、非有界な$E_K$上の一様な制御を$K$近傍のコンパクト集合上の近似へ変換する。

最後に、得た自己同型で切断を固定したFatou–Bieberbachモデルへ移し、そのモデルを引き戻して微分を正規化する。Kusakabeのconvex spray判定でOka性を得て、被覆を通して$X_K$にも移す。

応用では平行移動を含む反転座標と局所化定理を使う。slab crossでは障害物が平面コンパクト集合の積となる。周期的球の場合は座標境界に現れる低次元の球の反転像も含めて、多項式凸性を制御する必要がある。これらはIntroductionに記された役割の説明であり、後続節の近似や流れの計算を新たに検証したものではない。

## 原論文との対応

- **Abstractページ:** [Oka complements in algebraic tori and their logarithmic covers](https://arxiv.org/abs/2610.15433)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.15433v1) — Section 1, pp. 1–3（Section 2の開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.15433v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
