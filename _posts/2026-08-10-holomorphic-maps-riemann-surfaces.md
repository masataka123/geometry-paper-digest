---
layout: paper
title: "Improved bounds on the number of holomorphic maps between compact Riemann surfaces"
title_ja: "コンパクトRiemann面間の正則写像数に対する改良上界"
authors: "Masaharu Tanabe"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
topic: several-complex-variables
tags: []
arxiv_id: "2605.21137v1"
arxiv_url: "https://arxiv.org/abs/2605.21137v1"
arxiv_submitted: "2026-05-20"
arxiv_updated: "2026-05-20"
summary: >-
  種数 $g>1$ のコンパクトRiemann面から、種数が1より大きいRiemann面への非定数正則写像を同型を除いて数える。著者は写像数を種数だけで抑える新しい明示的上界を示し、従来のChamizo–Fuertes上界に対して漸近的な改良を与える。
abstract_en: >-
  We give new upper bounds for the number of nonconstant holomorphic maps depending only on the genus. Our estimates improve previously known bounds. The proof is based on the study of pullbacks of holomorphic differentials, together with techniques from the geometry of numbers and the theory of Jacobian varieties.
summary_en: ""
abstract_ja: >-
  非定数正則写像の個数に対し、始域の種数だけに依存する新しい上界を与える。その評価は既知の上界を改善する。正則微分の引き戻しを調べ、数の幾何とJacobian多様体の理論を組み合わせるのが証明の基礎である。
abstract_source_url: "https://arxiv.org/abs/2605.21137v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.21137v1](https://arxiv.org/abs/2605.21137v1)
- **著者:** Masaharu Tanabe
- **初回投稿日・確認版の更新日:** 2026年5月20日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

種数 $g>1$ の固定したコンパクトRiemann面 $X$ から、種数 $gamma>1$ のRiemann面への非定数正則写像は有限個しかない、というのがde Franchis–Severi型の有限性である。本論文は有限性そのものではなく、標的を固定せず、写像を標的の同型で同一視した集合 $I(X)$ の大きさを $g$ だけでどこまで明示的に抑えられるかを扱う。

IntroductionではKani、Alzati–Pirola、著者自身、Chamizo–Fuertesによる上界が比較される。主結果は、$I(X)$ の個数を二項係数と $2g-1$ の冪和で抑える新しい評価である。

Riemann–Hurwitz公式から写像次数は最大 $g-1$ である。この最大次数をChamizo–Fuertesの評価に代入して比較すると、新上界と旧上界の比は $g\to\infty$ で0に収束するため、単なる定数の調整ではなく漸近的な改良になっている。

## 背景と問題設定

$f_i:X\to Y_i$ を非定数正則写像とし、ある共形写像 $h:Y_1\to Y_2$ が $h\circ f_1=f_2$ を満たすとき両者を同型とする。標的の種数が $gamma$ の同型類集合を $I_\gamma(X)$、それらの和を $I(X)$ と書く。de Franchisの定理により $\#I(X)$ は有限だが、その有効な種数依存評価が問題となる。

Chamizo–Fuertesは次数 $d$ 以下の写像数を用いて評価した。本論文は正則微分の引き戻しを格子として数え直し、Jacobianの準同型と数の幾何を通じて候補数を制御する。

## 主結果

### 主定理（Theorem 1.2）

種数 $g>1$ のコンパクトRiemann面 $X$ に対し、標的の同型を除いた非定数正則写像の総数は

$$
\#I(X)\leq\left\{(2g-1)^{2g}+(2g-1)^{2g-1}+\cdots +(2g-1)^4\right\}
\binom{6g-6}{2g-2}.
$$

特に二項係数を評価すれば、右辺の $\binom{6g-6}{2g-2}$ を $(27/4)^{2g-2}$ に置き換えた形も得られる。Introductionが強調する比較は、Riemann–Hurwitzによる最大次数 $g-1$ を既存評価に入れたとき、新上界との比が種数とともに0へ向かう点である。

## 証明の見取り図

写像 $f:X\to Y$ が誘導する正則微分の引き戻しを $H^1(Y,\mathbb Z)$ の格子と結び付け、これを双対Jacobian $\widehat J(Y)$ の格子として扱う。Jacobian間の準同型とそのRosati involutionが引き戻しの可能性を整理し、数の幾何による格子点の評価が候補数を与える、という流れがIntroductionで示されている。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.21137v1](https://arxiv.org/abs/2605.21137v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
