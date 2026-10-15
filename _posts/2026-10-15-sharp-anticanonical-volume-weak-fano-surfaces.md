---
layout: paper
title: Sharp Quadratic Bounds for Anticanonical Volumes of Weak Fano Surfaces
title_ja: 弱Fano曲面の反標準体積に対する最適な二次下界
authors: Pinxian Bie
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove an explicit lower bound of optimal quadratic order for the anticanonical volume of every complex $\epsilon$-log canonical weak del Pezzo surface, with no restriction on its Picard number or its singularities. More precisely, the volume is at least $\min\{c_{exc},\epsilon^2/3032064\}$, where $c_{exc}>0$ is an explicit absolute constant. Quotients of the projective plane show that the exponent two is optimal. We also prove cubic upper bounds for the cyclic determinant mass and for the Picard number of a smooth rational log Calabi--Yau pair. We give geometric examples showing that these two auxiliary exponents are optimal in their respective settings.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- birational-geometry
- positivity
arxiv_id: 2609.06845v3
arxiv_url: https://arxiv.org/abs/2609.06845
arxiv_submitted: '2026-09-06'
arxiv_updated: '2026-10-13'
summary: 複素ε-log canonical弱del Pezzo曲面の反標準体積に、εの二次のオーダーをもつ明示的下界を与える。Picard数や特異点の個数を制限せず、指数2が最適であることも示す。特異点の局所分母だけでなく、大域的な補因子と境界曲線の配置を利用する点が鍵となる。
abstract_en: ''
summary_en: This work quantifies how small the anticanonical volume of a weak del Pezzo surface can be when log discrepancies have a fixed lower bound. The resulting estimate has optimal quadratic dependence on that lower bound without restrictions on the Picard number. Separate estimates control cyclic resolution determinants and rational log Calabi–Yau surfaces. Their cubic growth does not force a cubic loss in the volume estimate, because the argument also uses global boundary geometry.
abstract_ja: 任意の複素ε-lc弱del Pezzo曲面に対して、反標準体積の明示的な二次下界を証明する。下界は正の絶対定数とε²/3032064の小さい方で与えられ、射影平面の商の例から指数2は改善できない。併せて、非canonicalな巡回商特異点の解消行列式の総和と、滑らかな有理log Calabi–Yau対のPicard数に三次上界を与える。最適性が示される対象の範囲はそれぞれ異なり、Fano曲面の最小解消のPicard数に三次増大の例を与えたとは主張しない。
abstract_source_url: https://arxiv.org/abs/2609.06845
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.06845v3](https://arxiv.org/abs/2609.06845)
- **著者:** Pinxian Bie
- **初回投稿日:** 2026-09-06
- **最終更新日:** 2026-10-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

弱del Pezzo曲面では反標準因子がnefかつbigであり、その自己交叉数は正の体積を与える。特異点のlog discrepancyに正の下限を固定すれば体積も0から離れるが、その下界が特異点の許容度にどう依存するかは、単なる有界性からは分からない。

本論文は、すべてのlog discrepancyが$\epsilon$以上という条件の下で、体積を$\epsilon^2$の定数倍以上に抑える。Picard数、特異点の個数、例外曲線の鎖の長さに追加の上限を置かない。この一般性で指数2が最適であることが主結果となる。

局所特異点に付随する行列式の総和は三次まで大きくなり得る。それでも体積の下界は二次で済むことを、補因子の大域的配置を使って示す。数値定数そのものの最良性は主張せず、指数の最適性と区別する。

## 背景と問題設定

$X$を複素数体上のklt弱del Pezzo曲面とし、

$$
V(X)=\operatorname{vol}(-K_X)=(-K_X)^2>0
$$

とおく。$0<\epsilon\le1$に対し、$\epsilon$-lcとはすべての因子的log discrepancyが$\epsilon$以上であることをいう。従来の大域Cartier指数を経由する評価は全局所分母を同時に処理する必要があり、体積の一つの交叉数を評価するには過剰な情報を使っていた。

## 主結果

### 主定理1（Theorem 1.1）

任意の複素$\epsilon$-lc弱del Pezzo曲面について

$$
V(X)\ge\min\{c_{\mathrm{exc}},h_0\epsilon^2\}\ge\min\{c_{\mathrm{exc}},h_0\}\epsilon^2,
\qquad
h_0=\frac1{3032064},\quad c_{\mathrm{exc}}=\left(2\cdot84^{128\cdot42^5}\right)^{-1}
$$

が成り立つ。反標準モデルがnonexceptionalなら$V(X)\ge h_0\epsilon^2$でよい。任意の$p<2$に対し、この曲面のクラス全体で$V(X)\ge c\epsilon^p$を保証する正の絶対定数$c$は存在しない。したがって最適なのは二次という指数であり、$h_0$などの係数の最良性ではない。

### 主定理2（Theorem 1.2）

最小解消$f:Y\to X$の各特異点$p$に対し、例外曲線の負の交叉行列$M_p=(-E_{p,i}\cdot E_{p,j})$の行列式を$D_p$とする。非canonicalな巡回商特異点に限って足した量を$M_{\mathrm{cyc}}(X)$と書くと

$$
\rho(Y)\le2+4\epsilon^{-2}+12\epsilon^{-3}\le18\epsilon^{-3},\qquad
M_{\mathrm{cyc}}(X)\le344\epsilon^{-3}
$$

である。巡回商$\frac1r(1,q)$では$D_p=r$だが、非巡回商では解消行列式と局所群の位数を同一視してはならない。

また、滑らかな射影有理曲面$S$と有効$\mathbb Q$因子$\Theta$について、$(S,\Theta)$が$\epsilon$-lcかつ$K_S+\Theta\sim_{\mathbb Q}0$なら

$$
\rho(S)\le2+4\epsilon^{-2}+12\epsilon^{-3}
$$

が成り立つ。行列式総和の指数3はFano曲面で最適であり、後者のPicard数の指数3は記載したlog Calabi–Yau対のクラスで最適である。一方、Fano曲面の最小解消のPicard数が実際に三次増大することまでは、この例からは従わない。

## 証明の見取り図

nonexceptionalなFano曲面で次数$1,2,3,4,6$のlc補因子を取り、最小解消上の境界とdiscrepancyを追う。局所的な随伴補正と自己交叉補正を、大域的な交叉数で一緒に制御する。体積が二次スケールで小さければ境界成分は特別な有理曲線となり、補因子と$\epsilon$-lc性を保って縮約できる。

有理ファイブレーションのファイバーに重みを付けることで三次評価を得るが、そのまま体積下界へ置き換えるのではない。同じ補因子を保った縮約で、成分数に応じた逆体積の増分が可算和として制御できることを使う。

さらに2補因子の境界を$\Gamma=S+\frac12H$の形に還元する。分数部分が残る場合には交叉行列の行列式または核から得られる鉛筆を使い、残らない場合には反標準サイクルをトーリックな比較曲面と比べる。局所分母と大域境界の関係を保つことが、最終的に指数を二次へ改善する仕組みである。

## 原論文との対応

- **Abstractページ:** [Sharp Quadratic Bounds for Anticanonical Volumes of Weak Fano Surfaces](https://arxiv.org/abs/2609.06845)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.06845v3) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2; equations (1.1)–(1.4)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.06845v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
