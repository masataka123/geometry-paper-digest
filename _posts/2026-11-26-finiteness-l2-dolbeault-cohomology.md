---
layout: paper
title: The finiteness of $L^2$ Dolbeault cohomology groups
title_ja: 完備近似を用いたL² Dolbeaultコホモロジーの有限性
authors: Jian Chen, Yi Li
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this paper, motivated by J.-P. Demailly's finiteness argument, we establish a criterion for a closed linear operator between Hilbert spaces to have closed range of finite codimension. We then apply this criterion to give affirmative answers to two questions of T. Ohsawa on the finiteness of $L^2$ Dolbeault cohomology groups in a unified manner. To this end, we adapt Demailly's compactness argument to a family of complete approximating metrics, thereby establishing the finite dimensionality of the $L^2$ Dolbeault cohomology groups with respect to a possibly incomplete metric. Furthermore, we extend the answers to the setting of singular metrics with quasi-plurisubharmonic local weights.
topic: several-complex-variables
tags:
- l2-methods
- pluripotential-theory
- noncompact-kahler-geometry
arxiv_id: 2611.33696v1
arxiv_url: https://arxiv.org/abs/2611.33696
arxiv_submitted: '2026-11-25'
arxiv_updated: '2026-11-25'
summary: 非コンパクト複素多様体上で、必ずしも完備でない計量に対するL² Dolbeaultコホモロジーの有限次元性を示す。コンパクト集合の外で計量形式と直線束の曲率が一致するという条件のもと、大沢の二つの問題を統一的に扱う。
abstract_en: ''
summary_en: Which metric defines the norm matters for cohomology on an open complex manifold. Chen and Li use complete metrics to obtain estimates while keeping the original, possibly incomplete metric in the conclusion. A finite-dimensional error space controls the loss in solving the limiting equation.
abstract_ja: 変化するHilbert空間上の近似方程式を使い、極限の閉作用素の像が閉で有限余次元であることを示す。この判定を最大拡張のDolbeault複体に適用し、準多重劣調和な局所重みをもつ特異計量も扱う。
abstract_source_url: https://arxiv.org/abs/2611.33696
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.33696v1](https://arxiv.org/abs/2611.33696)
- **著者:** Jian Chen, Yi Li
- **初回投稿日:** 2026-11-25
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非コンパクト多様体では、通常のDolbeaultコホモロジーと、指定した計量で二乗可積分な形式から作るコホモロジーは異なる。計量の完備性を追加してしまうと、元の有限性問題の一部を失う。

著者らは近似計量上で方程式を有限次元の誤差を許して解き、一様評価をもつ解をもとの計量へ戻す。コホモロジーを像の閉包で割る前に、像自体が閉であることも結論に含まれる。

この手法は完備Kähler計量を別に備える場合と、弱1完備性だけをもつ場合に適用できる。それぞれの滑らかな係数計量の場合が大沢の二つの問いに対応する。

## 背景と問題設定

$M$ を連結な $n$ 次元複素多様体、$E$ を正則直線束とし、$g$ を基本形式 $\omega\_g$ をもつ滑らかなHermite計量とする。共通の仮定は $\mathrm{supp}(\omega\_g-\Theta\_h)\Subset M$ である。特異計量 $h$ の場合は曲率をカレントとして読む。

## 主結果

### 閉値域の判定（Theorem 1.4）

閉作用素 $T\_0$ を変化するHilbert空間上の $T\_\epsilon$ で近似する。任意の右辺を $N$ 次元の誤差を許して一様有界な解で実現でき、一様有界な厳密解をもつ収束列の右辺の極限が $\mathrm{Im}\thinspace T\_0$ に入るなら、$\mathrm{Im}\thinspace T\_0$ は閉で余次元は $N$ 以下である。

### 補助的な完備Kähler計量がある場合（Theorem 1.5）

$M$ 上に何らかの完備Kähler計量が存在すれば、前述の台条件と $h$ の局所重みの準多重劣調和性のもとで
$$
\dim\_{\mathbb C}H^{n,q}\_{(2),\max}(M,E;g,h)<\infty,\qquad 1\le q\le n .
$$
ここで $g$ 自体の完備性は要求しない。各次数で最大拡張の $\bar\partial$ の像は閉である。

### 弱1完備多様体の場合（Theorem 1.6）

$M$ に滑らかな多重劣調和なエグゾースション関数がある場合にも、同じ台条件のもと同じ有限性と閉値域性が成り立つ。ここでいう弱1完備性には多様体のKähler性を含めない。

## 証明の見取り図

Bochner–Kodaira–Nakanoの恒等式から得る曲率・捩率の誤差を固定コンパクト集合に集め、局所Sobolev評価とコンパクト性で有限個の線形汎関数に置き換える。適切な線形結合で誤差を消してから弱極限を取る。特異計量については滑らかな計量の局所複体と比較し、商に現れるコンパクト台の連接層を使う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.33696)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.33696v1) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.4–1.6、Questions 1.2–1.3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.33696v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
