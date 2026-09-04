---
layout: paper
title: "Projective embedding of degenerating family of Kähler-Einstein manifolds with normal crossing limit"
title_ja: "正規交差極限を持つKähler--Einstein多様体退化族の射影埋め込み"
authors: "Jingzhou Sun"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  We study the Bergman embeddings of degenerating families of Kähler-Einstein manifolds of negative curvature. We show that when the central fiber has only simple normal crossing singularities, we can construct orthonormal bases so that the induced Bergman embeddings converge to the Bergman embedding of the limit space together with multi-bubbles.
topic: several-complex-variables
tags:
  - kahler-einstein-metrics
  - metric-limits
  - singularities
arxiv_id: "2609.03845v1"
arxiv_url: "https://arxiv.org/abs/2609.03845"
arxiv_submitted: "2026-09-03"
arxiv_updated: "2026-09-03"
summary: >-
  負曲率Kähler--Einstein多様体の退化族について、中心ファイバーが単純正規交差を持つときのBergman埋め込みの極限を決定する。極限は中心ファイバーの正規化の埋め込みだけでなく、交差層に沿う多重bubbleを含み、その形は正規交差の組合せで記述される。
abstract_en: ""
summary_en: >-
  The paper analyzes Bergman embeddings for negatively curved Kähler--Einstein manifolds approaching a simple-normal-crossing central fiber. Suitable orthonormal bases produce a projective limit containing both the embedded normalization and bubble components over the intersection strata. It also gives asymptotic upper and lower information for the Bergman kernel in terms of the deepest stratum.
abstract_ja: >-
  負曲率Kähler--Einstein多様体の退化族に付随するBergman埋め込みを研究する。中心ファイバーの特異点が単純正規交差だけである場合、適切な正規直交基底を構成すると、誘導されるBergman埋め込みは極限空間のBergman埋め込みと多重bubbleを合わせた射影部分多様体へ収束する。
abstract_source_url: "https://arxiv.org/abs/2609.03845"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.03845](https://arxiv.org/abs/2609.03845)
- **著者:** Jingzhou Sun
- **初回投稿日:** 2026年9月3日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素射影多様体 $X$ の単純正規交差因子 $D$ に対し、$K_X+[D]$ が豊富ならば、$X\setminus D$ は有限体積の完全負曲率Kähler--Einstein計量を持つ。このCheng--Yau計量を中心ファイバーの正則部分に持つ退化族で、滑らかなファイバーのBergman埋め込みがどの射影幾何へ収束するかを問う。

主結果は、十分大きな多重標準束 $kK$ に対して正規直交基底を選び、任意の退化列から部分列を取ると、Bergman像が明示的な部分多様体 $Y$ へ収束するというものである。$Y$ は中心ファイバーの正規化のBergman像に加え、複数成分が交わる層の上に現れる $(\mathbb{CP}^1)^{i-1}$ 束からなる。

先行研究では三つの中心成分が同時に交わらない場合が扱われていた。本論文はその制約を除き、高余次元の角に由来する多重bubbleを組合せまで記述する。さらにBergman核の最大値と最小値について、最深交差層の深さを反映する漸近評価を与える。

## 背景と問題設定

$pi:\mathcal X\to B$ を円板上の正則族とし、$t\ne0$ のファイバー $X_t$ は滑らかで $\operatorname{Ric}(\omega_t)=-\omega_t$ を満たすとする。全空間は滑らか、中心ファイバー $X_0=\bigcup_{i=0}^mX_{0,i}$ は滑らかな超曲面の正規交差和で、双対化層 $K_{X_0}$ は豊富であると仮定する。既知の収束定理により、$\omega_t$ は $X_0\setminus\operatorname{Sing}(X_0)$ 上の完全Cheng--Yau計量へCheeger--Gromov収束する。

$H_{t,k}$ を $kK_{X_t}$ の $L^2$ 正則切断のBergman空間とする。交差層を $X_{0,I}=\bigcap_{i\in I}X_{0,i}$ と書き、非空な交差に現れる最大成分数を $\kappa$ とする。問題は、非崩壊部分の収束だけでは見えない交差層近傍の射影極限を捉えることである。

## 主結果

### Bergman埋め込みの極限（Theorem 1.2）

十分大きな $k$ に対し、各成分の極限Bergman空間に正規直交基底を選べる。$t\to0$ の任意の列には部分列と $H_{t,k}$ の正規直交基底が存在し、対応する埋め込み $\Phi_{t,k}:X_t\to\mathbb{CP}^{N_k-1}$ の像は部分多様体

$$
Y=\bigcup_{1\le i\le\kappa}Y_i
$$

へ収束する。$Y_1$ は中心ファイバーの正規化のBergman像である。$i\ge2$ では $Y_i=\bigcup_{|I|=i}Y_I$ であり、各 $Y_I$ は成分 $Y_{I,j}$ の和、各 $Y_{I,j}$ は $X_{0,I}$ 上の $(\mathbb{CP}^1)^{i-1}$ 束となる。異なる二成分の交わりは同じ層上の $(\mathbb{CP}^1)^{i-2}$ 束である。

### Bergman核の評価（Theorem 1.4）

$\rho_{t,k}$ の最大・最小をそれぞれ $\lambda_u(t,k),\lambda_l(t,k)$ とし、$a_t=\log|\log|t||$ と置く。十分大きな $k$ に対して正定数 $c_k,c'_k,c''_k$ が存在し、

$$
c_k<\frac{\lambda_u(t,k)}{|\log|t||^{\kappa-1}}<c'_k,
\qquad
\lambda_l(t,k)<c''_k\left(|\log|t||^{-2k+1}a_t^{2k}\right)^{\kappa-1}
$$

が成り立つ。最大値は最深の交差層に最も近い点で達成される。

## 証明の見取り図

既知のKähler--Einstein計量収束が非崩壊部分を制御し、崩壊部分にはZhangの局所解析を用いる。交差成分数の少ない層から高余次元の層へ帰納し、一般ファイバー上の大域切断を構成する。二成分交差で現れる線形 $\mathbb{CP}^1$ だけでは高次交差の極限を決められないため、$(\mathbb{CP}^1)^l$ 型bubbleを明示的に追跡する。Bergman核評価はこの基底構成と局所規格化から得られる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.03845](https://arxiv.org/abs/2609.03845)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.4
- **論文構成の説明:** Introduction, pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
