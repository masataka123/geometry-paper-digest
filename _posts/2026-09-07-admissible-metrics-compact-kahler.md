---
layout: paper
title: "Admissible metrics on compact Kähler varieties"
title_ja: "コンパクトKähler多様体上の許容可能計量"
authors: "Wenhao Ou"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  Let $X$ be a normal compact Kähler variety, and $\mathcal{F}$ a coherent reflexive sheaf on $X$. We investigate the existence of admissible Hermitian metrics on $\mathcal{F}$. If moreover $\mathcal{F}$ is slope stable, we also study the existence of admissible Hermitian-Yang-Mills metrics on it. The existence will hold if one can prove a uniform Sobolev inequality on singular spaces.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
  - singularities
  - chern-classes
arxiv_id: "2201.04821v2"
arxiv_url: "https://arxiv.org/abs/2201.04821"
arxiv_submitted: "2022-01-13"
arxiv_updated: "2022-08-18"
summary: >-
  正規コンパクトKähler多様体上の反射層に対し、特異集合を許すHermitian計量とHermitian–Yang–Mills計量の存在を扱う。解消上で退化するKähler計量に一様Sobolev不等式が成り立つという予想を仮定し、安定反射層の許容可能Hermitian–Yang–Mills計量とBogomolov–Gieseker型不等式を導く。
abstract_en: >-
  Let $X$ be a normal compact Kähler variety, and $\mathcal{F}$ a coherent reflexive sheaf on $X$. We investigate the existence of admissible Hermitian metrics on $\mathcal{F}$. If moreover $\mathcal{F}$ is slope stable, we also study the existence of admissible Hermitian-Yang-Mills metrics on it. The existence will hold if one can prove a uniform Sobolev inequality on singular spaces.
summary_en: ""
abstract_ja: >-
  正規コンパクトKähler多様体 $X$ とその上の連接反射層 $\mathcal F$ に対し、許容可能Hermitian計量の存在を研究する。さらに $\mathcal F$ が勾配安定なら、許容可能Hermitian–Yang–Mills計量の存在も考察する。これらの存在は、特異空間上の一様Sobolev不等式が証明できれば従う。
abstract_source_url: "https://arxiv.org/abs/2201.04821"
license_name: "Creative Commons CC0 1.0 Universal"
license_url: "http://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2201.04821](https://arxiv.org/abs/2201.04821)
- **著者:** Wenhao Ou
- **初回投稿日:** 2022年1月13日
- **最終更新日:** 2022年8月18日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [Creative Commons CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

滑らかなコンパクトKähler多様体では、安定ベクトル束とHermitian–Yang–Mills計量の対応がDonaldson–Uhlenbeck–Yau理論により確立されている。Bando–Siuはこれを滑らかな基礎空間上の反射層へ広げ、特異集合近傍で曲率の二乗可積分性などを満たす「許容可能計量」を導入した。本論文は基礎空間そのものが特異な場合を扱う。

方法は、解消 $r:\widehat X\to X$ 上で反射引き戻しを局所自由化し、$r^*\omega$ の小さなKähler摂動に関する熱方程式を解くというものである。極限で必要な大域評価を得る鍵として、退化する計量族のSobolev定数が一様に抑えられるというConjecture 1.2を置く。

この予想の下で、任意の反射層に対する許容可能な熱流の長時間存在を示し、勾配安定な反射層には許容可能Hermitian–Yang–Mills計量が存在することを導く。さらにChern類のBogomolov–Gieseker型不等式と、その等号が射影平坦性を特徴づけることを得る。したがって主要な存在結果は無条件ではなく、一様Sobolev不等式に条件づけられている。

一方、特異Kähler多様体の滑らかな稠密開集合上の熱核について、正時刻での有界性、質量保存、必要なSobolev正則性を無条件に確立する。この解析結果が、特異空間上で熱流法を運用するための基盤となる。

## 背景と問題設定

階数 $r$ の安定束 $\mathcal F$ に対する古典的Bogomolov–Gieseker不等式は

$$
\left(c_2(\mathcal F)-\frac{r-1}{2r}c_1(\mathcal F)^2\right)\cdot H^{n-2}\geq 0
$$

である。解析側では、Hermitian–Yang–Mills計量のChern曲率から対応する積分不等式が従い、等号条件にも幾何学的意味がある。問題は、基礎空間が特異なときにもこの対応と不等式を構成できるかという点にある。

Conjecture 1.2は、滑らかな中心のブローアップ $p:Y\to X$ とKähler形式 $\eta$ に対する $\omega_\varepsilon=p^*\omega+\varepsilon\eta$ が、$0<\varepsilon\leq1$ で一様なSobolev定数を持つと主張する。この仮定は熱核と熱流の一様評価を極限へ渡すために用いられる。

## 主結果

### 熱核の基礎性質（Theorem 1.3）

コンパクトKähler多様体 $X$ の滑らかなZariski開稠密集合 $X^\circ$ 上の熱核 $K$ は、正の閉時間区間で有界であり、$K(x,\cdot,t)$ は $L^2_1$ に属する。またLaplacianの二乗可積分性と質量保存

$$
\int_{X^\circ}K(x,y,t)\,dy=1
$$

が成り立つ。これは後続の存在定理とは異なり、Conjecture 1.2を仮定しない解析的成果である。

### 許容可能な熱流（Theorem 1.4）

Conjecture 1.2の下で、正規コンパクトKähler多様体上の任意の反射層には初期Hermitian計量が存在し、Donaldson型熱方程式の解が全時間で存在する。各正時刻の計量は許容可能である。

### 安定反射層のHermitian–Yang–Mills計量（Theorem 1.5）

同じ予想を仮定すると、勾配安定な反射層は許容可能Hermitian–Yang–Mills計量を持つ。これは滑らかな場合の対応を、特異な基礎空間へ条件付きで延長する主張である。

### Chern類不等式と等号条件（Theorem 1.6）

階数 $r$ の安定反射層 $\mathcal F$ に対し、得られた計量 $H$ は

$$
\int_X\left(c_2(\mathcal F,H)-\frac{r-1}{2r}c_1(\mathcal F,H)^2\right)\wedge\omega^{n-2}\geq0
$$

を満たす。等号成立はChern接続が射影平坦であることと同値である。

## 証明の見取り図

解消上で反射層をベクトル束に直し、退化計量 $\omega_\varepsilon$ に関する熱方程式を解く。Conjecture 1.2から熱核の一様評価を得て、局所的な楕円・放物型評価と合わせて $\varepsilon\to0$ の極限を構成する。安定性から極限が退化する可能性を排除する部分ではSimpsonの議論を特異空間へ適合させ、Theorem 1.3の熱核性質と切断関数を用いる。最後に曲率恒等式からChern類不等式と等号条件を読む。

## 原論文との対応

本記事はAbstractとIntroductionにあるTheorems 1.3–1.6、Conjecture 1.2、および証明方針を中心に整理した。各節の技術的評価や証明の詳細は扱っていない。
