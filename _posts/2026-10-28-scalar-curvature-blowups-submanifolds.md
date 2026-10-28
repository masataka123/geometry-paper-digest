---
layout: paper
title: Scalar curvature of blow-ups of compact Kähler manifolds along complex submanifolds
title_ja: 部分多様体に沿うブローアップとスカラー曲率の近似
authors: Zeqing Miao, Bo Yang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: 'Let $(M,\omega)$ be a compact K\"ahler manifold with its scalar curvature $S(\omega)$, Assume that $M$ has complex dimension at least $3$ and contains a complex submanifold $X$ of complex codimension at least $2$. Let $\sigma: Bl_{X} M \rightarrow M$ denote the blow-up of $M$ along $X$. We show that $Bl_{X} M$ admits a sequence of K\"ahler metrics $\{\widetilde{\omega}_{i}\}_{i \geq 1}$ whose scalar curvatures $S(\widetilde{\omega}_i)$ converge to $\sigma^{\ast} (S(\omega))$ in the $C^0(Bl_{X} M)$ norm. Our work is motivated by a recent result of Brown, who established the corresponding result for blow-ups at a point. The proof is based on the gluing method for constructing extremal K\"ahler metrics on blow-ups, together with new analytic tools and several modifications needed in our setting.'
topic: differential-geometry
tags:
- curvature
- birational-geometry
- positivity
arxiv_id: 2608.22410v1
arxiv_url: https://arxiv.org/abs/2608.22410
arxiv_submitted: '2026-08-23'
arxiv_updated: '2026-08-23'
summary: コンパクトKähler多様体を正の次元の複素部分多様体に沿ってブローアップしたとき、元のスカラー曲率を一様に近似する計量を構成する。余次元2も含む貼り合わせ解析により、正のスカラー曲率を持つKähler計量の存在がこの操作で保たれることを示す。
abstract_en: ''
summary_en: The paper studies how much a blow-up must change scalar curvature in Kähler geometry. It constructs metrics in shrinking exceptional classes whose scalar curvatures uniformly approach the pullback of the original function. New weighted estimates handle centers of positive dimension, including codimension two. The result preserves positive scalar curvature under such blow-ups without claiming exact constant-scalar-curvature solutions.
abstract_ja: 複素次元3以上のコンパクトKähler多様体を余次元2以上の正の次元の複素部分多様体に沿ってブローアップする。例外因子を小さくしたKähler類の中に、スカラー曲率が元の曲率の引き戻しへC⁰で近づく計量を構成する。点のブローアップに関するBrownの結果を拡張し、線形化作用素の一様評価と余次元2向けの重み付き空間を用いる。
abstract_source_url: https://arxiv.org/abs/2608.22410
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.22410v1](https://arxiv.org/abs/2608.22410)
- **著者:** Zeqing Miao, Bo Yang
- **初回投稿日:** 2026-08-23
- **最終更新日:** 2026-08-23
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ブローアップは複素多様体の局所的な形を大きく変える操作であるが、その後のKähler計量のスカラー曲率を元のものへ近づけることは可能か。本論文は、部分多様体を中心とするブローアップについて肯定的に答える。

得られるのは曲率関数の一様近似であり、元の計量が定スカラー曲率なら厳密に同じ定数を持つ計量を構成するという主張ではない。ただし元のスカラー曲率が至る所正なら、十分良い一様近似も正となるため、正スカラー曲率の存在は保存される。

技術的には、点を中心とした既存の結果から、正の次元の中心へ進む際の座標と線形解析の難しさを解消する。特に余次元二では誤差項と重みを選び直す方法が重要となる。

## 背景と問題設定

$(M^m,\omega)$をコンパクトKähler多様体、$X\subset M$を複素余次元$k$の部分多様体とする。$\sigma:\operatorname{Bl}\_XM\to M$をブローアップ、$E=\sigma^{-1}(X)$を例外因子と書く。

小さい$\epsilon>0$に対し$\sigma^\ast[\omega]-\epsilon^2[E]$はKähler類となる。問題はこの類に属する計量のスカラー曲率$S$を制御することである。点に沿う場合のBrownの結果と、cscK・extremal計量の貼り合わせ法が背景にある。

## 主結果

### スカラー曲率の一様近似（Theorem 1.1）

$m\geq3$、$2\leq k\leq m-1$とする。任意の許容誤差$\widetilde\epsilon>0$に対し$\epsilon\_0>0$が存在し、各$0<\epsilon\leq\epsilon\_0$について

$$
[\widetilde\omega]=\sigma^\ast[\omega]-\epsilon^2[E],\qquad
\bigl\Vert S(\widetilde\omega)-\sigma^\ast S(\omega)\bigr\Vert\_{C^0(\operatorname{Bl}\_XM)}\leq\widetilde\epsilon
$$

となるKähler計量$\widetilde\omega$を取れる。$[E]=c\_1(\mathcal O(E))$である。中心の余次元$k=m$、すなわち点の場合は先行研究に対応し、表示した定理の範囲とは区別される。

$S(\omega)>0$なら、コンパクト性により正の最小値があるため、それより小さい誤差を取って$S(\widetilde\omega)>0$を得る。これは近似定理の直接の帰結である。

### 滑らかなFanoファイブレーション（Proposition 1.4）

コンパクト複素多様体間の正則submersion $f:X\to B$で、すべてのファイバーがFano、底$B$がKähler計量を持つなら、$X$は正のスカラー曲率を持つKähler計量を持つ。特異ファイバーを持つ任意のMori fiber spaceへの主張ではない。

### 逆操作と未解決問題

ブローアップがKählerでも、ブローダウン先がKählerとは限らない。このためQuestion 1.2は、ブローダウン先のbalanced計量のChernスカラー曲率による近似や正値性を問う形で述べられる。

またuniruledなコンパクトKähler多様体が正の（全）スカラー曲率を持つKähler計量を持つかというConjecture 1.3を挙げる。全スカラー曲率は

$$
\int\_M S(\omega)\frac{\omega^m}{m!}
=\frac{2\pi}{(m-1)!}\int\_M c\_1(M)\wedge\omega^{m-1}
$$

で与えられるが、その正値性と各点での$S>0$は異なる条件である。論文は高次元の一般的特徴づけを解決したとは述べない。

## 証明の見取り図

まず小さい例外因子に適合する背景計量$\omega\_\epsilon$を作り、$\omega\_\epsilon+i\partial\bar\partial\varphi$の形で補正する。スカラー曲率の誤差が小さくなる方程式を、重み付きHölder空間の縮小写像原理で解く。

部分多様体への距離を使う座標は点の場合より滑らかさが弱いため、背景計量を精密に評価する。線形化作用素の逆の一様有界性は、スケーリングと高階楕円方程式の除去可能特異点の議論で得る。余次元二では新しい重み付きノルムと誤差項を導入して不都合な漸近項を打ち消す。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2608.22410)
- **Introduction:** [PDF](https://arxiv.org/pdf/2608.22410v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.1；Proposition 1.4；Question 1.2とConjecture 1.3は未解決
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2608.22410v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
