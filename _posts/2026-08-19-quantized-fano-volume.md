---
layout: paper
title: "Quantized Volume Comparison for Fano Manifolds, II"
title_ja: "Fano多様体の量子化体積比較 II"
authors: "Kaixuan Lyu, Kewei Zhang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  In this note, the second author's quantized volume comparison conjecture is solved: If $X$ is a smooth complex $K$-semistable Fano variety of dimension $n$, then for every integer $m\geq1$, \[ h^0(X,-mK_X)\leq h^0(\mathbb P^n,-mK_{\mathbb P^n}) =\binom{n+m(n+1)}{n}, \] and equality for one $m$ characterizes projective space. Somewhat surprisingly, the same statement actually holds whenever $T_X$ is slope semistable with respect to $-K_X$. The idea is to apply a jet-dimension counting trick to a filtration of subsheaves induced by $H^0(X,-mK_X)$. Then the slope semistability condition yields the desired dimension bound.
topic: algebraic-geometry
tags:
  - fano-varieties
  - k-stability
  - stability
  - vector-bundles-sheaves
  - positivity
arxiv_id: "2608.17397v1"
arxiv_url: "https://arxiv.org/abs/2608.17397"
arxiv_submitted: "2026-08-18"
arxiv_updated: "2026-08-18"
summary: >-
  滑らかなK-semistable Fano多様体の各反標準次数で、切断空間の次元は射影空間のそれ以下であり、一つの次数での等号だけで射影空間を特徴づける。さらにK安定性より弱い接束の傾き半安定性だけで同じ結論を導き、漸近的な体積比較を有限次数ごとの鋭い比較へ量子化する。
abstract_en: ""
summary_en: >-
  The authors prove a finite-level analogue of the sharp anticanonical volume comparison for smooth Fano manifolds. At every positive tensor power, a K-semistable Fano manifold has no more anticanonical sections than projective space, and equality at a single level forces the manifold to be projective space. The theorem is established under the weaker condition that the tangent bundle is slope semistable with respect to the anticanonical polarization. A filtration by orders of jets converts slope inequalities for symmetric cotangent powers into the required dimension count.
abstract_ja: >-
  $n$ 次元の滑らかな複素K-semistable Fano多様体 $X$ に対し、すべての整数 $m\geq1$ で $h^0(X,-mK_X)\leq\binom{n+m(n+1)}n$ を証明し、一つの $m$ で等号なら $X\simeq\mathbb P^n$ と示す。実際には、接束 $T_X$ が $-K_X$ に関して傾き半安定であるという、より弱い仮定で同じ有限次数比較が成立する。証明では切断のjet消滅次数による層のfiltrationと傾き半安定性を組み合わせる。
abstract_source_url: "https://arxiv.org/abs/2608.17397"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.17397](https://arxiv.org/abs/2608.17397)
- **著者:** Kaixuan Lyu, Kewei Zhang
- **初回投稿日:** 2026年8月18日
- **最終更新日:** 2026年8月18日
- **主分類・副分類:** math.AG（主分類）, math.DG（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fujitaの体積比較は、$n$ 次元K-semistable Fano多様体に対して $(-K_X)^n\leq(n+1)^n$ を与え、等号の場合に射影空間を特徴づける。これは反標準Hilbert多項式の最高次係数についての漸近的比較である。自然な問題は、各有限次数 $m$ で切断数そのものを射影空間と比較できるか、という「量子化」版である。

本論文は、すべての $m\geq1$ についてこの鋭い比較を証明する。しかも必要なのはK-semistabilityそのものではなく、接束 $T_X$ の $-K_X$ に関する傾き半安定性でよい。K-semistabilityからこの接束半安定性が従う既知の結果を使えば、当初の予想が系として得られる。

一つの有限次数で等号になっただけで $X\simeq\mathbb P^n$ となる点も重要である。これは最高次係数だけが一致する体積等号より強い情報であり、有限levelのrigidityを示す。一方、接束半安定性だけを仮定した体積等号から射影空間が従うかは、Introductionで未解決問題として残される。

証明の中心は、一般点でのjet評価が作る層のfiltrationである。そのgraded pieceを対称余接束の部分層として捉え、傾き半安定性から消滅次数の総和を抑え、Taylor係数の組合せ論的な次元数え上げと比較する。

## 背景と問題設定

漸近Riemann–Rochにより

$$
h^0(X,-mK_X)=\frac{(-K_X)^n}{n!}m^n+O(m^{n-1})
$$

であるため、Fujitaの体積不等式は大きな $m$ における主要項の比較を与える。しかし有限 $m$ の不等式は低次項まで制御する必要があり、体積比較だけからは従わない。論文は、非コンパクトKähler幾何における多項式増大正則関数の次元比較との類似も動機として述べる。

## 主結果

### K-semistable Fanoに対する比較（Theorem 1.1）

$X$ を $n$ 次元の滑らかな複素K-semistable Fano多様体とする。任意の整数 $m\geq1$ について

$$
h^0(X,-mK_X)\leq h^0(\mathbb P^n,-mK_{\mathbb P^n})
=\binom{n+m(n+1)}{n}
$$

が成り立つ。ある一つの $m\geq1$ で等号なら $X\simeq\mathbb P^n$ である。

### 接束半安定性による強化（Theorem 1.2）

$X$ を滑らかな複素Fano多様体とし、$T_X$ が $H=-K_X$ に関して傾き半安定とする。このより弱い仮定のもとでも上の有限level不等式がすべての $m$ で成立し、さらに

$$
(-K_X)^n\leq(n+1)^n
$$

を得る。有限levelで等号なら射影空間であり、逆に射影空間はすべてのlevelで等号を達成する。

### 一般の偏極版

Introductionでは一般化も提示される。$T_X$ が偏極 $A$ に関して半安定で $(-K_X)\cdot A^{n-1}>0$ なら、$h^0(X,mL)>0$ を満たす線束 $L$ に対し

$$
h^0(X,mL)\leq
\binom{n+\left\lceil\dfrac{(n+1)mL\cdot A^{n-1}}{(-K_X)\cdot A^{n-1}}\right\rceil}{n}
$$

を得る。$A=L=-K_X$ がTheorem 1.2である。

## 証明の見取り図

$L=mH$、$W=H^0(X,L)$、$N=\dim W$ と置き、jet評価 $W\otimes\mathcal O_X\to\mathcal P_X^j(L)$ のkernelから減少filtrationを作る。第 $j$ graded imageは $\operatorname{Sym}^j\Omega_X^1\otimes L$ のtorsion-free部分層である。接束の半安定性から対称冪も半安定となり、傾きは

$$
\mu_H(\operatorname{Sym}^j\Omega_X^1\otimes L)=H^n\left(m-\frac{j}{n}\right)
$$

となる。graded pieceへの傾き不等式を足し合わせると、一般点 $p$ で

$$
\sum_{a\geq1}h^0(X,L\otimes\mathfrak m_p^a)\leq mnN
$$

を得る。各次数のTaylor係数の次元 $\binom{n+j-1}{n-1}$ を小さい消滅次数から詰めると、$N>\binom{n+m(n+1)}n$ はこの上界と矛盾する。等号時には $L$ が $m(n+1)$-jetを生成し、反標準Seshadri定数による射影空間の特徴づけを適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.17397](https://arxiv.org/abs/2608.17397)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2, Question 1.3（一般偏極版はTheorem 2.5とCorollary 2.6として予告）
- **論文構成の説明:** pp. 3–4（証明方針）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
