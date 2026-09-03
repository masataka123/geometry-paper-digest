---
layout: paper
title: "On the spectral variety for rank two Higgs bundles"
title_ja: "階数2 Higgs束のスペクトル多様体"
authors: "Siqi He, Jie Liu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this article, we study the Hitchin morphism over a smooth projective variety $X$. The Hitchin morphism is a map from the moduli space of Higgs bundles to the Hitchin base, which in general not surjective when the dimension of X is greater than one. Chen-Ngô introduced the spectral base, which is a closed subvariety of the Hitchin base. They conjectured that the Hitchin morphism is surjective to the spectral base and also proved that the surjectivity is equivalent to the existence of finite Cohen-Macaulayfications of the spectral varieties. For rank two Higgs bundles over a projective manifold $X$, we explicitly construct a finite Cohen-Macaulayfication of the spectral variety as a double branched covering of $X$, thereby confirming Chen-Ngô's conjecture in this case. Moreover, using this Cohen-Macaulayfication, we can construct the Hitchin section for rank two Higgs bundles, which allows us to study the rigidity problem of the character variety and also to explore a generalization of the Milnor-Wood type inequality.
topic: algebraic-geometry
tags:
  - higgs-nonabelian-hodge
  - moduli
  - fundamental-groups
arxiv_id: "2310.18934v1"
arxiv_url: "https://arxiv.org/abs/2310.18934"
arxiv_submitted: "2023-10-29"
arxiv_updated: "2023-10-29"
summary: >-
  高次元射影多様体上の階数2 Higgs束について、スペクトル多様体の有限Cohen–Macaulay化を二重分岐被覆として構成する。これによりChen–Ngôの全射性予想を確認し、Hitchin切断、指標多様体の剛性判定、Milnor–Wood型不等式へ応用する。
abstract_en: ""
summary_en: >-
  This paper analyzes the Hitchin morphism for rank-two Higgs bundles on a smooth projective variety. It constructs a finite Cohen–Macaulay model of each non-nilpotent spectral variety as a branched double cover. The construction proves surjectivity onto the spectral base and yields a higher-dimensional Hitchin section. It also leads to criteria for rigidity of rank-two character varieties and to a Milnor–Wood-type bound.
abstract_ja: >-
  滑らかな射影多様体上では、Higgs束のHitchin写像は高次元になるとHitchin基底全体へ全射とは限らない。本論文は階数2の場合にスペクトル多様体を二重分岐被覆によって有限Cohen–Macaulay化し、スペクトル基底への全射性を証明する。さらにHitchin切断を構成し、指標多様体の剛性とMilnor–Wood型不等式を導く。
abstract_source_url: "https://arxiv.org/abs/2310.18934"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2310.18934](https://arxiv.org/abs/2310.18934)
- **著者:** Siqi He, Jie Liu
- **初回投稿日:** 2023年10月29日
- **最終更新日:** 2023年10月29日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲線上ではHitchin写像は全射であり、その一般ファイバーはスペクトル曲線上の階数1捩れなし層で記述される。高次元ではHiggs場の可積分条件により全射性が失われ、スペクトル多様体にも強い特異性が現れる。

Chen–NgôはHitchin基底内にスペクトル基底を導入し、Hitchin写像がそこを経由することを示した。本論文は階数2に限定し、非冪零スペクトルデータから二重分岐被覆を明示的に作ることで、必要なCohen–Macaulay化を得る。

この構成はスペクトル写像の全射性だけでなく、古典的な曲線の場合を高次元化するHitchin切断を与える。さらにPicard数1の多様体に対する階数2指標多様体の剛性と、非単線織多様体上の表現に対するMilnor–Wood型評価が得られる。

## 背景と問題設定

階数 $r$ のHiggs束 $(E,\varphi)$ は、$\varphi:E\to E\otimes\Omega_X^1$ と可積分条件 $\varphi\wedge\varphi=0$ を備える。特性多項式の係数が定めるHitchin写像は

$$
h_X:\mathcal M^{\mathrm{stack}}_{\mathrm{Higgs}}\longrightarrow
A_X:=\bigoplus_{i=1}^r H^0(X,\operatorname{Sym}^i\Omega_X^1)
$$

である。高次元では像を含む閉部分集合 $S_X\subset A_X$ がスペクトル基底となる。Chen–Ngô予想はスペクトル写像 $sd_X$ が $S_X$ へ全射であると主張する。

## 主結果

### Cohen–Macaulay化とスペクトル対応（Theorem 1.2）

$X$ を射影多様体、$S_X$ を $\mathrm{GL}_2(\mathbb C)$ のスペクトル基底とする。$s=(s_1,s_2)\in S_X$ が $4s_2-s_1^2\ne0$ を満たす非冪零データなら、スペクトル多様体 $X_s$ は $X$ の二重分岐被覆としてCohen–Macaulay化 $\widetilde X_s$ をもつ。$\widetilde X_s$ 上の生成点階数1の極大Cohen–Macaulay層の同型類と、$\operatorname{Tr}(\varphi)=s_1$, $\det(\varphi)=s_2$ を満たす階数2 Higgs束の同型類が一対一に対応する。

### 全射性とHiggs場の因子化（Corollary 1.3, Theorem 1.4）

スペクトル写像 $sd_X:\mathcal M_{\mathrm{Higgs}}\to S_X$ は全射であり、階数2の場合のChen–Ngô予想が従う。また非冪零データごとに線束 $L$ と $0\ne\alpha\in H^0(X,L^{-1}\otimes\Omega_X^1)$ が存在し、対応するHiggs場は

$$
\varphi=\alpha\circ\varphi_0+\frac12s_1\otimes\operatorname{Id}_E
$$

と因子化される。

### Hitchin切断（Theorem 1.5）

$S_X\setminus\{(0,0)\}$ 上に切断 $\chi_{\mathrm{Hit}}$ が存在し、$sd_X\circ\chi_{\mathrm{Hit}}=\operatorname{Id}$ を満たす。その像は実Higgs束からなり、曲線上のHitchin切断を高次元へ拡張する。

### 剛性とMilnor–Wood型不等式（Theorems 1.6, 1.7）

Picard数1の滑らかな射影多様体 $X$ では、$\mathrm{GL}_2(\mathbb C)$ 指標多様体が剛的であることは、$b_1(X)=0$ かつ任意の非分岐二重被覆 $\widetilde X\to X$ について $b_1(\widetilde X)=0$ であることと同値である。

さらに $X$ が非単線織で、$\rho:\pi_1(X)\to\mathrm{SU}(1,1)$ が簡約表現、$\gamma$ が可動曲線類なら

$$
|\tau_\gamma(\rho)|\leq \frac12\deg_\gamma(K_X)=\frac12c_1(K_X)\cdot\gamma
$$

が成り立つ。

## 証明の見取り図

Introductionによれば、階数1対称微分の理論からスペクトル基底の幾何を取り出し、非冪零データに付随する二重被覆を構成する。この被覆上の極大Cohen–Macaulay層をHiggs束へ戻すスペクトル対応が全射性の核となる。同じCohen–Macaulay化をHitchin切断の構成にも用い、非可換Hodge対応を介して指標多様体の剛性と表現の数値的不等式へ移る。

## 原論文との対応

- **Abstractページ:** [arXiv:2310.18934](https://arxiv.org/abs/2310.18934)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Conjecture 1.1; Theorems 1.2, 1.4–1.7; Corollary 1.3
- **論文構成の説明:** Introduction, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
