---
layout: paper
title: "Compactness and Rigidity of Complete Kähler Ricci Shrinkers"
title_ja: "完備Kähler–Ricci収縮ソリトンのコンパクト性と剛性"
authors: "Tongxin Xu, Zhenlei Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we study compactness, rigidity, and related geometric properties of complete Kähler
  Ricci shrinkers through the polarized Fano fibration structure.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - curvature
  - noncompact-kahler-geometry
  - fano-varieties
  - toric-geometry
arxiv_id: "2608.10953v1"
arxiv_url: "https://arxiv.org/abs/2608.10953"
arxiv_submitted: "2026-08-11"
arxiv_updated: "2026-08-11"
summary: >-
  完備Kähler–Ricci収縮ソリトンに付随する偏極Fanoファイブレーションの斉次正則関数を、重み付きLaplacianのスペクトルと結び付ける。これにより、曲面とトーリックの場合のコンパクト性・分裂、Steinの場合のGaussian剛性、および非コンパクト例のRicci曲率の符号を統一的に導く。
abstract_en: ""
summary_en: >-
  The paper uses the canonical polarized Fano fibration of a complete Kähler–Ricci shrinker to connect algebraic weights with weighted spectral data. It establishes a sharp spectral gap whose equality forces a holomorphic Gaussian factor. This mechanism yields compactness and splitting results for shrinker surfaces and toric shrinkers, detects mixed Ricci signature on a known noncompact example, and proves Gaussian rigidity when the underlying complex manifold is Stein. The method is local and spectral-algebraic rather than dependent on classification or asymptotic conical analysis.
abstract_ja: >-
  本論文は、完備Kähler–Ricci収縮ソリトンの偏極Fanoファイブレーションを通じて、コンパクト性・剛性・関連する幾何を研究する。座標環の重みと重み付きLaplacianの固有値を対応させ、等号時のGaussian分裂を得る。この枠組みから曲面・トーリックソリトンの剛性、BCCD収縮ソリトンのRicci曲率の混合符号、滑らかなFano錐およびStein多様体上のGaussian剛性を導く。
abstract_source_url: "https://arxiv.org/abs/2608.10953"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.10953](https://arxiv.org/abs/2608.10953)
- **著者:** Tongxin Xu, Zhenlei Zhang
- **初回投稿日:** 2026年8月11日
- **最終更新日:** 2026年8月11日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ricci flowのType I特異点を放物型に拡大すると、勾配Ricci収縮ソリトンが極限モデルとして現れる。低次元では分類が進んでいる一方、実4次元以降の完備ソリトンは多様であり、正Ricci曲率がコンパクト性を強制するかという基本問題も一般には残っている。

Kählerの場合、複素構造によって解析と代数幾何を結べる。Sun–Zhangの結果によれば、滑らかな完備Kähler–Ricci収縮ソリトン $X$ には偏極アフィン錐への標準的射影射

$$
\pi:X\longrightarrow Y=\operatorname{Spec}R_X
$$

がある。本論文は座標環 $R_X$ の重み分解とドリフトLaplacianのスペクトルを対応させ、重み1の関数が存在する極限的な場合に複素Euclid因子が分裂することを示す。

このスペクトル・代数的機構を「first-order visibility」という局所条件と組み合わせる。曲面およびトーリック収縮ソリトンでは、正Ricci曲率からコンパクト性を、非負Ricci曲率から明示的なGaussian分裂を得る。既知例の計量公式や曲面分類、曲率有界性、無崩壊性、無限遠での漸近解析に依存しない点が新しい。

さらに同じ方法は局所曲率の符号も検出し、BCCD収縮ソリトンの特定の二点でRicciテンソルが負の固有値を持つことを示す。十分多くの大域正則関数があるSteinの場合には、任意次元でGaussian収縮ソリトンしかないという剛性へ到達する。

## 背景と問題設定

Ricci収縮ソリトン $(X,g,f)$ は、ある $\lambda>0$ に対し

$$
\operatorname{Ric}+\nabla^2f=\lambda g
$$

を満たす完備Riemann多様体である。Kähler形式を $\omega$ とすると、Kähler–Ricci収縮ソリトン方程式は

$$
\operatorname{Ric}(\omega)+\sqrt{-1}\,\partial\bar\partial f=\lambda\omega
$$

となる。

ソリトンベクトル場が生成する1パラメータ群の閉包を $T$ とすると、標準ファイブレーションの座標環は

$$
R_X=\bigoplus_{\beta\in\operatorname{Lie}(T)^*}R_{X,\beta}
$$

と分解する。$\varphi\in R_{X,\beta}$ に対して $\nabla f(\varphi)=\alpha_\beta\varphi$ かつ $-\Delta_f\varphi=\alpha_\beta\varphi$ であり、$E_1=\{\varphi\in R_X:\nabla f(\varphi)=\varphi\}$ が分裂を担う。

Definition 1.1のfirst-order visibilityとは、$\nabla f(q)=0$ かつ $d\varphi(q)\ne0$ となる点 $q$ と非定数正則関数 $\varphi\in R_X$ が存在することをいう。関数の重みをドリフトLaplacianの固有値へ、点 $q$ でのベクトル場の線形化をRicciテンソルの固有値へ結ぶ条件である。

## 主結果

### スペクトルギャップと分裂（Theorem 1.2）

$n$ 次元完備Kähler–Ricci収縮ソリトン上の任意の非定数斉次正則関数 $\varphi\in R_{X,\beta}$ について

$$
\alpha_\beta\geq1
$$

である。$\operatorname{Ric}>0$ なら不等号は狭義となる。$\alpha_\beta=1$ なら $X$ は正則等長に $\mathbb C\times N$ と分裂し、より一般に $\dim_{\mathbb C}E_1=k$ なら

$$
X\cong\mathbb C^k\times N
$$

と正則等長に分裂する。ここで $N$ も完備Kähler–Ricci収縮ソリトンである。

### Kähler–Ricci収縮ソリトン曲面（Theorem 1.4）

複素2次元の完備Kähler–Ricci収縮ソリトンでは、$\operatorname{Ric}>0$ なら $X$ はコンパクト、したがってFano曲面である。一方、$X$ が非コンパクトで $\operatorname{Ric}\geq0$ なら、Gaussian収縮ソリトン $\mathbb C^2$ または積収縮ソリトン $\mathbb P^1\times\mathbb C$ と正則等長である。

### トーリックの場合（Theorem 1.5）

任意次元の完備トーリックKähler–Ricci収縮ソリトンでは、$\operatorname{Ric}>0$ ならコンパクトなトーリックFano多様体である。非コンパクトで $\operatorname{Ric}\geq0$ なら

$$
X\cong\mathbb C\times N
$$

と $T^{\mathbb C}$-同変正則等長に分裂し、$N$ も完備トーリックKähler–Ricci収縮ソリトンとなる。

### BCCD例の曲率符号（Corollary 1.6）

$X=\operatorname{Bl}_p(\mathbb P^1\times\mathbb C)$ 上のBCCD収縮ソリトンについて、自然な射影の可約特異ファイバーを $C\cup E$ とする。このとき $C\setminus E$ と $E\setminus C$ のそれぞれに、Ricciテンソルが狭義負の固有値を持つ点が存在する。したがって両点でRicciテンソルの符号は混合する。

### 滑らかなFano錐とStein剛性（Theorems 1.7, 1.8）

滑らかなFano錐上のKähler–Ricci収縮ソリトンは、$\mathbb C^n$ 上のGaussian収縮ソリトンと正則等長である。さらに、完備Kähler–Ricci収縮ソリトンの基礎複素多様体 $X$ がSteinなら、やはり

$$
(X,g,J,f)\cong(\mathbb C^n,g_{\mathrm{Gauss}},J_{\mathrm{std}},f_{\mathrm{Gauss}})
$$

と正則等長になる。Introductionは、Conlon–Deruelleの独立研究からもこの結論が従う一方、本論文の方法は漸近錐性を先に示さない点で異なると明記している。

## 証明の見取り図

まず斉次正則関数の重み付き $L^2$ 可積分性を示し、Bakry–Émery曲率に対する鋭い重み付きLichnerowicz評価を適用する。等号の場合にはCheng–Zhou型のGaussian分裂をKähler設定へ移し、座標環の重み1部分の次元だけ $\mathbb C$ 因子を取り出す。

次にfirst-order visibilityによって、固定点で微分が消えない斉次関数を作る。曲面では標準偏極Fanoファイブレーションの局所幾何から、トーリックの場合にはmoment polyhedronの非有界辺からこの関数を得る。その重みをスペクトルギャップと比較することで、正Ricci曲率下の非コンパクト性を排除し、非負の場合には等号分裂を強制する。

Stein多様体では大域正則関数が接方向を十分に検出するため、この議論を反復して全方向をGaussian因子として分裂させる。BCCD例では反対に、ファイブレーションの一次挙動と重みから、Ricciテンソルに負方向がなければならないことを読み取る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.10953](https://arxiv.org/abs/2608.10953)
- **Introduction:** Section 1, pp. 2–6
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.4, 1.5, 1.7, 1.8; Corollary 1.6
- **論文構成の説明:** Introduction, p. 6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
