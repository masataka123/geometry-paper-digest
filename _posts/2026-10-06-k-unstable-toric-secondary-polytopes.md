---
layout: paper
title: K-unstable Toric Varieties and Secondary Polytopes
title_ja: K不安定なトーリック多様体と二次多面体
authors: Chi Li, Li Sheng, Yi Yao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CO
- math.DG
arxiv_abstract: |-
  For K-unstable toric varieties, Sz\'ekelyhidi's optimal test-function $\Theta_{P}$ is a mysterious concave function over the moment polytope $P$, which gives the maximal destabilizer for K-stability, and encodes the limiting behavior of the divergent Calabi flow. As balanced norms quantize cscK metrics, we show that $\Theta_{P}$ can be quantized by the maximal destabilizers for Chow-stability, which are given by the shortest GKZ vectors, i.e., the least norm point on the secondary polytope for the set $P\cap k^{-1}\mathbb{Z}^{n}$. Properties and algorithm for general sGKZ vectors are given. Our result may provide a new method to detect the K-unstability of toric varieties.
topic: algebraic-geometry
tags:
- k-stability
- toric-geometry
- csck-extremal-kahler-metrics
arxiv_id: 2610.05179v1
arxiv_url: https://arxiv.org/abs/2610.05179
arxiv_submitted: '2026-10-04'
arxiv_updated: '2026-10-04'
summary: |-
  滑らかなK不安定トーリック多様体の最大不安定化を、Chow不安定性を表す有限次元の組合せデータから近似する。二次多面体の最小ノルム点を適切に正規化すると、Székelyhidiの最適試験関数へ $L^2$ および内部の局所一様な意味で収束し、K不安定性を検出できる。
abstract_en: |-
  For K-unstable toric varieties, Sz\'ekelyhidi's optimal test-function $\Theta_{P}$ is a mysterious concave function over the moment polytope $P$, which gives the maximal destabilizer for K-stability, and encodes the limiting behavior of the divergent Calabi flow. As balanced norms quantize cscK metrics, we show that $\Theta_{P}$ can be quantized by the maximal destabilizers for Chow-stability, which are given by the shortest GKZ vectors, i.e., the least norm point on the secondary polytope for the set $P\cap k^{-1}\mathbb{Z}^{n}$. Properties and algorithm for general sGKZ vectors are given. Our result may provide a new method to detect the K-unstability of toric varieties.
summary_en: ''
abstract_ja: |-
  K不安定トーリック多様体に対するSzékelyhidiの最適試験関数 $\Theta_P$ は、K安定性の最大不安定化を表し、発散するCalabi流の極限挙動に関わる。本論文は、Chow安定性の最大不安定化を二次多面体の最短GKZベクトルで記述し、それらから $\Theta_P$ を量子化する。最短GKZベクトルの凸性・正値性と計算アルゴリズムも与え、K不安定性を調べる方法を提示する。
abstract_source_url: https://arxiv.org/abs/2610.05179
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05179v1](https://arxiv.org/abs/2610.05179)
- **著者:** Chi Li, Li Sheng, Yi Yao
- **初回投稿日:** 2026-10-04
- **最終更新日:** 2026-10-04
- **主分類・副分類:** math.AG（主分類）、math.CO, math.DG（副分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

標準Kähler計量が存在する場合には、balanced計量のような有限次元の対象からcscK計量を近似する考え方がある。本論文は、計量の存在を妨げる不安定性そのものにも同様の近似が可能かを問う。

トーリックの場合、相対K不安定性を最も強く表す対象は、モーメント多面体上の凹関数 $\Theta_P$ として記述される。著者らは、各次数のChow最大不安定化を二次多面体の最小ノルム点へ置き換え、その正規化が $-\Theta_P$ へ収束することを示す。

中心となる収束定理はDelzant格子多面体、すなわち滑らかな偏極トーリック多様体に対応する場合の結果である。全境界を含めた一様収束には別の条件が必要であり、また $\Theta_P$ が常に区分的アフィンかどうかは未解決である。有限次元近似の成立と、最終的な最適不安定化の代数的形状の決定は区別される。

## 背景と問題設定

$n$ 次元格子多面体 $P$ 上の凸関数 $\eta$ に対し、

<div>
$$
\Psi(\eta)=\frac12\int_P\eta^2\,dx+\int_{\partial P}\eta\,d\sigma
$$
</div>

を考える。$d\sigma$ は各ファセットの測度であり、$-\Theta_P$ がこの汎関数の一意な最小化関数となる。相対Donaldson–Futaki汎関数は

<div>
$$
M_P^{\mathrm{rel}}(\eta)
=\int_{\partial P}\eta\,d\sigma-\int_P\eta\ell_P\,dx
$$
</div>

で表される。$\ell_P$ は原論文の相対安定性を定めるアフィン関数であり、相対K半安定の場合は $\Theta_P=\ell_P$ とする。

格子点集合 $P_k=P\cap k^{-1}M$ に対し、二次多面体 $\Sigma(P_k)$ はその正則分割を符号化する。論文で用いる正規化の下で、その最小ノルム点を最短GKZベクトル $\sigma_k$ と呼ぶ。これは一般に二次多面体の頂点とは限らない。

## 主結果

### 最適試験関数の境界までの連続性（Theorem 1）

$\Theta_P$ は全空間へ凹関数として延長できる。特に $P$ の境界まで連続であり、$-\Theta_P$ の内部での劣微分集合は有界である。従来の有界性を強め、近似問題の極限関数に対する制御を与える。

### Chow最大不安定化の記述（Theorem 2）

格子多面体 $P$ が定めるトーリック多様体 $(X,L)$ について、$\iota_k:X\hookrightarrow\mathbb P H^0(X,kL)^*$ が埋め込みであるとする。このときChow半安定性は

<div>
$$
|P_k|^{-1}\in\Sigma(P_k)
\quad\Longleftrightarrow\quad
\sigma_k\equiv |P_k|^{-1}
$$
</div>

と同値である。Chow不安定なら、最大不安定化ノルムは正のスカラー倍を除いて一意で、トーリック基底 $s_{u,k}$ に対し

<div>
$$
\chi_k^*(s_{u,k})=|P_k|^{-1}-\sigma_k(u)
\qquad(u\in P_k)
$$
</div>

で与えられる。対角トーラスに関する従来の判定を、最大不安定化の対称性によって全ての $\mathrm{SL}(H^0(X,kL))$ の作用に対応させる。

### 最短GKZベクトルの性質（Theorem 3）

一般のmarked polytope $(Q,A)$ についても、最短GKZベクトル $\sigma_A$ は各点で正であり、凸包絡を $\sigma_A^\vee$ と書けば

<div>
$$
\sigma_A^\vee|_A=\sigma_A
$$
</div>

を満たす。従って最短GKZベクトルが頂点である場合、その三角形分割は $A$ の全ての点を使う。

### 主定理：Chow不安定化からK不安定化への収束（Theorem 4）

$V_P=\operatorname{Vol}(P)$ とし、

<div>
$$
\psi_k=2V_Pk^{n+1}\sigma_k^\vee-2k
$$
</div>

と置く。$P$ がDelzant格子多面体なら、$\psi_k$ は $L^2(P)$ と $\operatorname{int}P$ の任意のコンパクト集合上での一様収束の意味で $-\Theta_P$ に収束する。特に内部の点 $x$ で

<div>
$$
V_Pk^n\sigma_k^\vee(x)
=1-\frac{\Theta_P(x)}{2k}+o(k^{-1})
$$
</div>

となる。最小値も収束し、さらに

<div>
$$
\lim_{k\to\infty}M_P^{\mathrm{rel}}(\psi_k)
=-\|\Theta_P-\ell_P\|_{L^2}^2
$$
</div>

が成立する。一般の格子多面体では、$P$ 全体での一様収束は $\{\psi_k\}$ の一様有界性と同程度連続性に同値である。

### 不安定性の検出（Corollary 5）

相対K不安定なDelzant多面体では、十分大きい $k$ に対して $M_P^{\mathrm{rel}}(\sigma_k^\vee)<0$ となる。従って最短GKZベクトルを調べることで、相対K不安定性を検出できる。

## 証明の見取り図

Introductionは、非Archimedes的Fubini–Study写像とsuper-norm写像を、トーリック対称性の下で凸包絡と格子点への制限へ翻訳する。この対応からChow重みを二次多面体の幾何として扱えるようにする。

収束には、格子和の二項漸近展開と量子化汎関数を使う $\Gamma$ 収束の議論を用いる。Delzant条件が必要なのは、凸関数の積分を格子和で制御する主要評価であると説明されている。非Delzantの場合にはこの評価が失敗し得るため、滑らかな場合の結論を無条件に拡張していない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.05179](https://arxiv.org/abs/2610.05179)
- **Introduction:** Section 1、pp. 2–6。
- **主要定理:** Theorems 1–4、Corollary 5。正規化と漸近式は(1.4)–(1.5)。
- **論文構成:** p. 6。非Archimedes的記述、Chow最大不安定化、最適試験関数、収束の順に展開する。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction。
