---
layout: paper
title: Disc functionals and rational curves
title_ja: 正則円板の汎関数から有理曲線を取り出す
authors: Yinji Li, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: We prove a criterion for the existence of rational curves on compact Kähler manifolds using disc functionals. As applications, we obtain a transcendental version of the Miyaoka--Mori theorem with an optimal degree bound and a new proof of the characterization of uniruled compact Kähler manifolds.
topic: several-complex-variables
tags:
- positivity
- pluripotential-theory
arxiv_id: 2611.30833v1
arxiv_url: https://arxiv.org/abs/2611.30833
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: コンパクトKähler多様体上で、中心を固定した正則円板の汎関数から、その点を通る有理曲線と面積上界を得る。標準類が擬有効でない場合と、nefでないことを検出する部分多様体がある場合に応用する。
abstract_en: ''
summary_en: A holomorphic disc can develop a rational bubble while its centre stays fixed. The authors give a variational test that forces such a bubble and controls its area. Applied to the canonical class, the test distinguishes a covering by rational curves from the more local conclusion available along a subvariety.
abstract_ja: 面積を制御した正則円板の極限を使い、有理曲線がどの点を通るかを指定する。標準類の負性を測る交点数が、構成される曲線の次数に対する定量的な評価を与える。
abstract_source_url: https://arxiv.org/abs/2611.30833
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.30833v1](https://arxiv.org/abs/2611.30833)
- **著者:** Yinji Li, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

円板から有理曲線を取り出すには、極限で球面成分が生じるだけでなく、その成分が指定点を通る必要がある。著者らは円板の中心を強く見る対数重みを使う。

標準束が擬有効でないときには、すべての点を通る有理曲線が得られる。これは既知の単線織性判定に解析的な導出と面積評価を与える。

標準束がnefでないだけの場合には、負性を検出した部分多様体の各点について結論を得る。曲線の存在範囲と次数上界の双方に、負性を検出した交点数が現れる。

## 背景と問題設定

$\theta=\mathrm{Ric}(\omega)$ とし、中心が $x$ の正則円板 $f$ 上で $Q\_\rho(f)=(2\pi)^{-1}\int\_{\mathbb D}\log(1/|z|)f^\ast \rho$ とおく。境界に近い部分を軽く数える重み付き面積は $W(f)=\int\_{\mathbb D}(1-|z|^2)f^\ast \omega$ である。

## 主結果

### 指定点を通る有理曲線（Theorem 1.1）

$n$ 次元コンパクトKähler多様体で、ある $\delta,c>0$ に対し、中心が $x$ の円板上の $Q\_{\theta-\delta\omega}-cW$ の上限が無限大なら、$x$ を通る有理曲線 $R$ で
$$
[\omega]\cdot R\le 2\pi(n+1)/\delta
$$
を満たすものが存在する。

### 円板包絡（Theorem 1.2）

連結複素多様体上で $\rho$ が滑らかな閉実 $(1,1)$ 形式なら、中心を $x$ に固定した $Q\_\rho$ の下限は、$x$ の関数として $\rho$ 多重劣調和であるか、恒等的に $-\infty$ である。

### 標準類の擬有効性（Theorem 1.3）

コンパクトKähler多様体が単線織的であることと、$K\_X$ が擬有効でないことは同値である。$t>0$ で $[K\_X+t\omega]$ が擬有効でなければ、各点を通る曲線を $[\omega]\cdot R\le(n+1)/t$ と選べる。

### nef性の破れを検出した部分多様体（Theorem 1.5）

$d$ 次元の該当する部分多様体 $Y$ とnef類 $\omega\_1,\ldots,\omega\_{d-1}$ に対し $L\_Y(\gamma)=\int\_Y\gamma\wedge\omega\_1\wedge\cdots\wedge\omega\_{d-1}$ とおく。$L\_Y(K\_X)<0$ なら、任意のnef類 $\alpha$ と $x\in Y$ に対して $x$ を通る $R\subset X$ が存在し、
$$
\alpha\cdot R\le(n+1)\frac{L\_Y(\alpha)}{-L\_Y(K\_X)}
$$
が成り立つ。系1.6ではnef閾値 $\tau$ で得る $\alpha=[K\_X+\tau\omega]$ の零集合の各点を、$\alpha\cdot R=0$ かつ $0<-K\_X\cdot R\le n+1$ の曲線が通る。

## 証明の見取り図

補助汎関数を最小化し、正則円板の変分の第二微分を接方向にわたって足し合わせる。これにより面積が一様に有界で対数重み付き汎関数が発散する列を選べる。Gromovコンパクト性のもとで、中心に集中した面積が指定点を通る有理成分を生む。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.30833)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.30833v1) — §1.1–1.3, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3, 1.5、Corollary 1.6。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.30833v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
