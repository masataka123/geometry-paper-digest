---
layout: paper
title: Ricci pinching on complete Kähler manifolds with nonnegative bisectional curvature
title_ja: 非負二分正則曲率とRicci pinchingによるコンパクト性・平坦性
authors: Hanzhang Yin
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that a connected complete K\"ahler manifold of complex dimension at least two with nonnegative holomorphic bisectional curvature and uniformly pinched Ricci curvature is compact or flat. This removes the Euclidean volume growth assumption from the flatness theorem of Liu and Ni \cite{LiuNi} for uniform Ricci pinching. We first construct a Lipschitz plurisubharmonic function with finite total Monge--Amp\`ere mass by solving a global Bellman equation. Weighted estimates for a holomorphic canonical section then give a finite top Ricci integral. Ricci pinching implies that the Ricci form belongs to $L^n$, and its Hodge heat evolution has zero top integral by a Stokes argument and scalar heat decay. \par\noindent\textit{Keywords.} K\"ahler manifolds, Ricci pinching, nonnegative bisectional curvature, Bellman equations, Monge--Amp\`ere mass.
topic: differential-geometry
tags:
- curvature
- noncompact-kahler-geometry
- pluripotential-theory
- monge-ampere-equations
arxiv_id: 2610.22969v1
arxiv_url: https://arxiv.org/abs/2610.22969
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: 複素次元2以上の連結完備Kähler多様体が非負二分正則曲率と一様Ricci pinchingを持つなら、コンパクトまたは平坦であることを示す。既知の平坦性定理からEuclid的体積増大の仮定を除き、有限Monge–Ampère質量の多重劣調和関数と熱流を用いる。
abstract_en: ''
summary_en: A pointwise pinching condition compares the extreme eigenvalues of the Ricci tensor without imposing a uniform positive lower bound. Under nonnegative holomorphic bisectional curvature, the author proves that every noncompact complete example in complex dimension at least two is flat. The new step removes a volume-growth assumption through a global plurisubharmonic construction. Critical integrability and heat evolution then turn finite curvature mass into a vanishing result.
abstract_ja: 著者はRicci曲率の最小固有値と最大固有値の比を一様に下から抑える条件の下で、非コンパクトな完備Kähler多様体の平坦性を証明する。非負二分正則曲率は維持するが、Liu–Niの定理にあった体積増大条件は不要となる。Bellman方程式による多重劣調和関数の構成から最高次数のRicci積分の有限性を得て、その熱発展を使って消滅を導く。
abstract_source_url: https://arxiv.org/abs/2610.22969
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.22969v1](https://arxiv.org/abs/2610.22969)
- **著者:** Hanzhang Yin
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bonnet–Myers定理ではRicci曲率の一様な正の下限からコンパクト性が従う。これに対してRicci pinchingは、同じ点での最小・最大固有値の比を制御する条件であり、全体にわたる正の下限とは異なる。

本論文は、非負二分正則曲率を持つ完備Kähler多様体について、一様Ricci pinchingがコンパクト性または平坦性を強制することを示す。複素次元は2以上で、連結性を仮定する。

Liu–Niの先行結果には、非コンパクトな場合にEuclid的体積増大の仮定があった。著者は有限Monge–Ampère質量の多重劣調和関数を新たに構成し、この体積増大条件を取り除く。

## 背景と問題設定

$\operatorname{Ric}\_{\min}(x)$、$\operatorname{Ric}\_{\max}(x)$は、自己準同型$g\_x^{-1}\operatorname{Ric}\_x$の最小・最大固有値を表す。曲率の絶対量が小さくなっても比を保つことは可能であるため、pinchingから直ちにBonnet–Myersを使えるわけではない。

論文の主要な解析的課題は、Ricci形式$\rho(X,Y)=\operatorname{Ric}(JX,Y)$の最高次数積分を有限にすることである。ここでは単なる局所曲率評価ではなく、非コンパクト空間全体の積分制御が必要となる。

## 主結果

### コンパクトまたは平坦（Theorem 1.1）

$(M^n,g,J)$を連結完備Kähler多様体、$n\geq2$とし、二分正則曲率が非負であるとする。ある定数$\kappa>0$について

$$
\operatorname{Ric}\_{\min}(x)\geq\kappa\operatorname{Ric}\_{\max}(x)\qquad(x\in M)
$$

が成り立つなら、$M$はコンパクトまたは平坦である。特に非コンパクトなら平坦となる。コンパクトな場合まで平坦とする主張でも、体積増大の仮定を別の体積条件で置き換えた主張でもない。

## 証明の見取り図

まず連続な多重劣調和関数$v$を作り、

$$
\operatorname{Lip}(v)\leq1,\qquad \int\_M(dd^cv)^n<\infty
$$

を満たすようにする。$dd^c=\sqrt{-1}\partial\overline\partial$で、最高次数はBedford–Taylor測度として理解する。Bellman作用素を正則化し、正のtrace項を加えたresolvent方程式を解き、障壁と比較原理、Bernstein型勾配評価を通じて極限を取る。

熱正則化による狭義多重劣調和関数と正則な標準束の切断を組み合わせ、重み付き混合評価から

$$
\int\_M\rho^n<\infty
$$

を導く。pinchingと合わせると$\rho\in L^n(M)$となる。Hodge熱流に沿ってStokes公式が最高次数積分を保存する一方、スカラー熱流の減衰がその値を零にする。最後に普遍被覆へ移って平坦性を導く。この有限性の確立が、先行研究の体積増大仮定を除く役割を担う。

## 原論文との対応

- **Abstractページ:** [Ricci pinching on complete Kähler manifolds with nonnegative bisectional curvature](https://arxiv.org/abs/2610.22969)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.22969v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1; equations (1.1)–(1.3)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.22969v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
