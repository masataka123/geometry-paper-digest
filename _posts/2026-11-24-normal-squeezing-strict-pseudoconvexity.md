---
layout: paper
title: Normal Limits of the Squeezing Function and Strict Pseudoconvexity
title_ja: スクイージング関数の法線極限で強擬凸性を判定する
authors: Xiangsen Qin
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Let $p$ be a boundary point of a bounded pseudoconvex domain in $\mathbb{C}^n$, $n\ge2$, and suppose the squeezing function tends to $1$ along the inward normal at $p$. We show that $p$ is strictly pseudoconvex if the boundary is $C^{2,α}$ near $p$ for some $0<α\le1$, without assuming finite type or convexity. The proof begins under local $C^2$ regularity near $p$. A comparison of Bergman kernels rules out nonconstant holomorphic curve germs through $p$ contained in the boundary. With these curve germs excluded, rescaled normal translations give rise to a holomorphic semigroup. Classifying this semigroup identifies the normalized kernel limit at selected scales and yields the logarithmic growth exponent $n+1$ for the diagonal Bergman kernel along the inward normal. Under the $C^{2,α}$ assumption, Levi degeneracy at $p$ would give a kernel upper bound with exponent strictly below $n+1$. This contradiction proves $p$ is strictly pseudoconvex.
topic: several-complex-variables
tags:
- stein-geometry
arxiv_id: 2611.16703v2
arxiv_url: https://arxiv.org/abs/2611.16703
arxiv_submitted: '2026-11-12'
arxiv_updated: '2026-11-20'
summary: 有界擬凸領域の境界一点で、内向き法線に沿うスクイージング関数の極限が1なら、その点のLevi形式は正定値となる。境界にはその点の近くで二階微分のHölder連続性を仮定し、別にC²正則性だけでBergman核の法線方向の成長指数を求める。
abstract_en: Let $p$ be a boundary point of a bounded pseudoconvex domain in $\mathbb{C}^n$, $n\ge2$, and suppose the squeezing function tends to $1$ along the inward normal at $p$. We show that $p$ is strictly pseudoconvex if the boundary is $C^{2,α}$ near $p$ for some $0<α\le1$, without assuming finite type or convexity. The proof begins under local $C^2$ regularity near $p$. A comparison of Bergman kernels rules out nonconstant holomorphic curve germs through $p$ contained in the boundary. With these curve germs excluded, rescaled normal translations give rise to a holomorphic semigroup. Classifying this semigroup identifies the normalized kernel limit at selected scales and yields the logarithmic growth exponent $n+1$ for the diagonal Bergman kernel along the inward normal. Under the $C^{2,α}$ assumption, Levi degeneracy at $p$ would give a kernel upper bound with exponent strictly below $n+1$. This contradiction proves $p$ is strictly pseudoconvex.
summary_en: ''
abstract_ja: 球にどれだけよく埋め込めるかという領域全体の不変量から、一点の境界の二次の形を読み取る。法線上のすべての深さで球への近さを仮定する一方、他の境界点の滑らかさや有限型性は要求しない。
abstract_source_url: https://arxiv.org/abs/2611.16703
license_name: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
license_url: http://creativecommons.org/licenses/by-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.16703v2](https://arxiv.org/abs/2611.16703)
- **著者:** Xiangsen Qin
- **初回投稿日:** 2026-11-12
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/)

## 要約

スクイージング関数は、指定した内点を原点に写す単位球への正則埋め込みの像に、どれだけ大きな同心球が入るかを表す。滑らかな強擬凸境界に近づけば、その値は1に近づく。

その逆を示すには、本来は領域全体で定義される量から、一点での複素接方向の曲率を判定しなければならない。本論文は、境界に垂直な一本の線上での極限からこれを行う。

正則性の閾値にも意味がある。二階微分が連続という仮定だけでは強擬凸性への逆は一般に破れるが、Bergman核の成長にはなお球と共通する特徴が残る。

## 背景と問題設定

$s\_\Omega(z)$ は、$f(z)=0$ を満たす球への正則埋め込みについて、$r\mathbb B^n\subset f(\Omega)$ となる半径 $r$ の上限である。FornæssとWoldが問うたのは、境界全体でこの量が1に近づくときに領域が強擬凸となるかであった。

## 主結果

### 一本の法線からの判定（Theorem 1.1）

$n\geq2$ とし、$\Omega\Subset\mathbb C^n$ を有界擬凸領域、$p$ を境界点、$\nu\_p$ を外向き単位法線とする。ある $0<\alpha\leq1$ に対して境界が $p$ の近くで $C^{2,\alpha}$ 級なら、

$$
\lim\_{\delta\downarrow0}s\_\Omega(p-\delta\nu\_p)=1
$$

から $p$ の強擬凸性が従う。ここで極限はすべての十分小さい深さについて取る。全境界点でこの滑らかさを仮定すれば、境界に近づく際の大域的な極限から領域全体の強擬凸性が従う（Corollary 1.2）。

### Bergman核の成長指数（Theorem 1.3）

境界が $p$ の近くで $C^2$ 級であるときも、同じ法線極限の仮定の下で、対角Bergman核は

$$
\lim\_{\delta\downarrow0}\frac{\log K\_\Omega(p-\delta\nu\_p)}{\log(1/\delta)}=n+1
$$

を満たす。この式が決めるのは対数成長の指数であり、先頭係数の収束までは主張していない。

## 証明の見取り図

球への埋め込みの逆写像の極限を調べる。境界に曲線芽が残ると仮定して局所的な正則レトラクションと核の比較を組み合わせ、最小値原理に矛盾させる。さらに法線方向の尺度を選び、拡大した法線移動を正則半群として極限に移して核の成長を調べる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.16703)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.16703v2) — §1（とくに §§1.1–1.2）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.16703v2
- **確認したライセンス:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/)
- **source\_scope:** Abstract and Introduction
