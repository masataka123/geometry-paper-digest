---
layout: paper
title: A Counterexample to the Holomorphic Cancellation Problem
title_ja: 密度性質による安定化と正則消去問題への反例
authors: Gaofeng Huang
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this note we show that if a contractible Stein manifold $X$ with the density property admits a proper holomorphic embedding into $\mathbb{C}^k$, then $X \times \mathbb{C}^k$ is biholomorphic to $\mathbb{C}^{n+k}$ with $n=\dim X$. Combined with an announced result of Auroux, Bai and Pomerleano, this shows that for some $4 \le n \le 8$ there is a complex affine variety $X$ such that $X \times \mathbb{C}$ is biholomorphic to $\mathbb{C}^{n+1}$ and $X$ is not biholomorphic to $\mathbb{C}^n$. This settles the Holomorphic Cancellation Problem in the negative.
topic: several-complex-variables
tags:
- stein-geometry
- oka-theory
arxiv_id: 2610.12581v1
arxiv_url: https://arxiv.org/abs/2610.12581
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: 可縮なStein多様体が密度性質を持ち複素Euclid空間へ固有正則埋め込みできれば、十分なEuclid因子を掛けた積がEuclid空間になることを示す。外部で発表されたexotic affine spaceの結果を仮定すると、4から8のいずれかの次元で正則消去問題への反例が従う。
abstract_en: ''
summary_en: The cancellation question asks whether a Euclidean cylinder must have a Euclidean base. Huang proves a stabilization theorem for contractible Stein manifolds with sufficiently many complete vector fields. Applied to a known affine fourfold, and assuming an announced external result distinguishing it from affine space, this yields a counterexample in one of five possible dimensions. The same stabilization theorem also gives an explicit Euclidean cylinder over the Koras–Russell threefold.
abstract_ja: 正則同値では積のEuclid因子を消去できるかという問題を、密度性質を持つStein多様体の安定化から考える。主要な道具は、可縮性と固有埋め込みの次元を使い、積空間を複素Euclid空間と同定する定理である。反例の結論にはAuroux–Bai–Pomerleanoが発表した外部結果を仮定することがIntroductionに明記されている。別の応用としてKoras–Russell三次元多様体に四つの複素直線因子を掛けたものが七次元複素Euclid空間になる。
abstract_source_url: https://arxiv.org/abs/2610.12581
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.12581v1](https://arxiv.org/abs/2610.12581)
- **著者:** Gaofeng Huang
- **初回投稿日:** 2026-10-08
- **最終更新日:** 2026-10-08
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

<p>$X\times\mathbb C$ が複素Euclid空間なら、$X$ 自体も複素Euclid空間か。これが正則消去問題である。本論文は、多くの正則自己同型を持つStein多様体の安定化を用いて、この問いに否定的な答えを与える道筋を示す。</p>

中心となる新しい定理は、可縮なStein多様体に密度性質と固有正則埋め込みを仮定し、埋め込み先と同じ次元のEuclid因子を掛ければ積がEuclid空間になるというものである。ここでは消去を行うのではなく、因子を十分に加えることで単純な空間になることを示す。

反例の構成は、この安定化定理とAuroux–Bai–Pomerleanoが発表したexotic affine spaceの結果を組み合わせる。Introductionは後者を仮定して議論することを明示しており、本記事もその依存を保つ。具体的な反例の次元は4から8のいずれかであり、4に確定したとは述べない。

## 背景と問題設定

代数的なZariski消去問題と正則消去問題では同値関係が異なる。多様体が代数的にアフィン空間でないことだけから、双正則にも異なるとはいえない。本論文ではこの区別が外部結果の必要性と直結する。

Stein多様体の密度性質とは、完備な正則ベクトル場が生成するLie代数が、すべての正則ベクトル場の空間でコンパクト開位相について稠密になる性質である。これはAndersén–Lempert理論の主要な仮定であり、単なる位相的可縮性には含まれない。

## 主結果

### 主定理1：密度性質を持つStein多様体の安定化（Theorem 1.2）

<p>$X$ が複素次元 $n$ の可縮なStein多様体で密度性質を持ち、固有正則埋め込み $X\hookrightarrow\mathbb C^k$ が存在するなら</p>

<div>
$$
X\times\mathbb C^k\cong_{\mathrm{hol}}\mathbb C^{n+k}.
$$
</div>

<p>既知のStein埋め込み定理と合わせると、$n\ge2$ では</p>

<div>
$$
X\times\mathbb C^{\lfloor3n/2\rfloor+1}
\cong_{\mathrm{hol}}\mathbb C^{\lfloor5n/2\rfloor+1}
$$
</div>

となる。可縮で正則にflexibleなStein多様体にも、複素直線との積が密度性質を持つという外部結果を介して、有限回の安定化後にEuclid空間になることが従う。

### 主定理2：正則消去への反例（Theorem 1.1、外部結果を仮定）

<p>Auroux–Bai–Pomerleanoの発表された結果を仮定すると、ある $n\in\{4,5,6,7,8\}$ と可縮な $n$ 次元アフィン多様体 $X$ が存在して</p>

<div>
$$
X\times\mathbb C\cong_{\mathrm{hol}}\mathbb C^{n+1},\qquad
X\not\cong_{\mathrm{hol}}\mathbb C^n
$$
</div>

<p>となる。出発点は既知の滑らかな可縮アフィン四次元多様体</p>

<div>
$$
X_{3,2}=\left\{uv=\frac{(xz+1)^3-(yz+1)^2-z}{z}\right\}\subset\mathbb C^5.
$$
</div>

<p>分子は $z$ で割り切れるので右辺は多項式である。密度性質と埋め込みから $X_{3,2}\times\mathbb C^5\cong_{\mathrm{hol}}\mathbb C^9$ が従う。外部結果は $X_{3,2}\not\cong_{\mathrm{hol}}\mathbb C^4$ を与える。したがって五つの因子を一つずつ外す途中で消去が失敗し、$X_{3,2}\times\mathbb C^j$、$0\le j\le4$ のどれかが反例となる。$j=0$ が反例だと特定する議論ではない。</p>

### 主定理3：Koras–Russell三次元多様体への応用（Theorem 1.7）

<p>$X_{\mathrm{KR}}=\{x+x^2y+z^2+t^3=0\}\subset\mathbb C^4$ に対し</p>

<div>
$$
X_{\mathrm{KR}}\times\mathbb C^4\cong_{\mathrm{hol}}\mathbb C^7
$$
</div>

<p>が成り立つ。同様に $t^3$ を奇数 $\beta\ge3$ の $t^\beta$ に替えた族にも適用される。これは既知の可縮性と密度性質から安定化定理を使う応用であり、$X_{\mathrm{KR}}$ 自身が $\mathbb C^3$ と双正則かという問題を解いたものではない。</p>

## 証明の見取り図

Introductionは主要な道具としてAndersén–Lempert理論を挙げ、安定化定理の証明をSection 2に置く。本記事ではその後の証明を新たに読み込まず、Introduction内で説明された反例への論理を中心に扱う。すなわち、密度性質から得る安定化と、安定化前の空間がEuclid空間でないという外部入力を分け、因子を順に外して消去の失敗を検出する。

さらに論文はKoras–Russell多様体の円環作用と安定化を組み合わせ、七次元以上のEuclid空間上の線形化できない正則作用へ応用する。代数的な同型について述べる予想や条件付きの帰結は、双正則な主定理と区別される。

## 原論文との対応

- **Abstractページ:** [A Counterexample to the Holomorphic Cancellation Problem](https://arxiv.org/abs/2610.12581)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.12581v1) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.7; Remark 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.12581v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
