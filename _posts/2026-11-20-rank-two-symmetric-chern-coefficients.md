---
layout: paper
title: Positivity and uniform log-concavity for rank-two Chern coefficients
title_ja: 階数二の束の対称冪に現れるChern係数の正値性と対数凹性
authors: Hang-Cheng Dong, Changle Zhao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the binomial-basis coefficients in the Schur expansion of the Chern classes of symmetric powers of a rank-two bundle. Bérczi and Fehér conjectured that these coefficients are nonnegative and log-concave in the Newton index. An inverse-series formula yields an integral gamma-positive refinement with exact support and a positive expression for the derivatives of the shifted Chern quotient. We prove that generalized Bernoulli polynomials of real order at least their degree have simple real zeros. Applied to the shifted quotient, this gives strict ultra-log-concavity in the Schur index at every positive shift. For the original Newton coefficients, we establish strict log-concavity with an explicit multiplicative margin in two uniform regions. A Hahn projection gives a square-root band about the balanced Schur index; a complex saddle estimate extends this to a band of linear width. Uniform estimates for the cumulants of a normalized Schur functional give a terminal Newton
  region of linear width. Polynomial coefficient identities also establish every row with Schur index at most six or imbalance at most nine. The argument separates log-concavity in the Schur, derivative and Newton indices and identifies the factorial factors in the transfer between the latter two. The unrestricted Newton log-concavity conjecture remains open.
topic: algebraic-geometry
tags:
- chern-classes
- vector-bundles-sheaves
arxiv_id: 2611.24563v1
arxiv_url: https://arxiv.org/abs/2611.24563
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 階数二のベクトル束の対称冪のChern類をSchur基底で展開し、各係数を対称冪の次数の二項係数で展開する。Bérczi–Fehérが予想したNewton添字に関する対数凹性を二つの一様な領域と境界の族で示す。
abstract_en: We study the binomial-basis coefficients in the Schur expansion of the Chern classes of symmetric powers of a rank-two bundle. Bérczi and Fehér conjectured that these coefficients are nonnegative and log-concave in the Newton index. An inverse-series formula yields an integral gamma-positive refinement with exact support and a positive expression for the derivatives of the shifted Chern quotient. We prove that generalized Bernoulli polynomials of real order at least their degree have simple real zeros. Applied to the shifted quotient, this gives strict ultra-log-concavity in the Schur index at every positive shift. For the original Newton coefficients, we establish strict log-concavity with an explicit multiplicative margin in two uniform regions. A Hahn projection gives a square-root band about the balanced Schur index; a complex saddle estimate extends this to a band of linear width. Uniform estimates for the cumulants of a normalized Schur functional give a terminal Newton
  region of linear width. Polynomial coefficient identities also establish every row with Schur index at most six or imbalance at most nine. The argument separates log-concavity in the Schur, derivative and Newton indices and identifies the factorial factors in the transfer between the latter two. The unrestricted Newton log-concavity conjecture remains open.
summary_en: ''
abstract_ja: ずらした二項係数で展開すると、二つのChern根の基本対称式に関して非負整数係数が現れる。著者らはその台を決定し、Schur添字の対数凹性と、元のNewton添字の対数凹性が従う範囲を区別する。
abstract_source_url: https://arxiv.org/abs/2611.24563
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24563v1](https://arxiv.org/abs/2611.24563)
- **著者:** Hang-Cheng Dong, Changle Zhao
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

階数二の束のChern根を固定しても、対称冪を取ると根の個数が増える。各Chern類を二変数のSchur多項式で書けば、対称冪の次数に依存する整数値多項式が係数に現れる。

BércziとFehérの問いは、その多項式を二項係数で書いたとき、係数列の各項の平方が両隣の積以上になるかというものである。どの添字を動かすかによって、似た形の不等式でも意味は異なる。

著者らはChern根に関する正値展開を構成し、Schur添字については全域で強い評価を、Newton添字については明示した範囲で厳密な評価を得る。後者の全域にわたる予想は残っている。

## 背景と問題設定

根を $x,y$ とすると $\operatorname{Sym}^d E$ の根は $ix+(d-i)y$（$0\le i\le d$）である。その第 $k$ Chern類 $C\_{k,d}$ で $s\_{(k-j,j)}$ の係数を $A\_{k,j}(d)=\sum\_N B\_{k,j,N}\binom dN$ と書く。予想の対象は $j,k$ を固定したときの $N$ に沿う列である。

## 主結果

### 非負整数展開と台（Theorem 1.1）

$\rho=xy,\ \sigma=x+y$ とおけば、$k\ge1$ に対し

$$
C\_{k,d}=\sum\_{p,N}\Gamma\_{k,p,N}\binom{d+1}{N}\rho^p\sigma^{k-2p}
$$

の係数は非負整数である。正となるのは $0\le p\le\lfloor k/2\rfloor$、$k\le N\le 2k-p$、かつ $p>0$ または $N>k$ を満たす場合に限る。

### Schur添字の評価（Theorem 1.2）

実数位数 $\alpha\ge n\ge1$（$n$ は整数）の一般化Bernoulli多項式 $B\_n^{(\alpha)}$ は $(0,\alpha)$ に相異なる実根を $n$ 個持つ。この結果から、強制される下降階乗を $A\_{k,j}$ から取り除いて変数をずらした係数 $F\_{k,j}(s)$ は、$s>0$ で $F\_{k,j}(s)/\binom{k+1}{j}$ が $j$ について厳密に対数凹となる。

### Newton添字の一様評価（Theorem 1.3, Corollary 1.4）

$k\le N\le2k-1$ で、平衡点に近いSchur添字または末端に近いNewton添字について、通常の対数凹性を強めた

$$
B\_{k,j,N}^2>\left(1+\frac{k}{(N-k+1)(N+2)}\right)B\_{k,j,N-1}B\_{k,j,N+1}
$$

を示す。たとえば $k\ge3\cdot10^{40}$ なら、$k-2j\le10^{-13}k$ または $2k-N\le10^{-13}k$ で十分である。これらは十分条件であり最適性の主張を伴わない。

### 境界にある列（Theorem 1.5）

$j\le6$ または $k-2j\le9$ なら、許容される任意の $k,j$ に対してNewton列全体が対数凹となる。この結論は上の厳密な倍率までは要求しない。

## 証明の見取り図

逆形式級数の微分方程式から正の展開を得る。平衡点付近では多項式の零点の扇形評価を微分係数列の対数凹性に移し、末端付近ではキュムラント評価を用いる。微分から前進差分への移行で階乗因子を保持することが、Newton列の明示的な倍率に結び付く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24563)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24563v1) — §1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3, 1.5; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24563v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
