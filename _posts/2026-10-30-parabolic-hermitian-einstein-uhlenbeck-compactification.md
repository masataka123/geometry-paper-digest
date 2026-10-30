---
layout: paper
title: Compactification of parabolic Hermitian--Einstein moduli spaces on complex surfaces
title_ja: 複素曲面上の放物的Hermitian–Einsteinモジュライのコンパクト化
authors: Xilun Li, Gang Tian
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Let $\overline{X}$ be a compact complex surface with a Gauduchon metric, and let $D\subset\overline{X}$ be a smooth connected divisor. We construct an Uhlenbeck compactification of the moduli space of rank-two parabolic Hermitian--Einstein connections with prescribed holomorphic determinant.
topic: differential-geometry
tags:
- hermite-einstein-metrics
- moduli
- vector-bundles-sheaves
- stability
arxiv_id: 2610.38958v1
arxiv_url: https://arxiv.org/abs/2610.38958
arxiv_submitted: '2026-10-28'
arxiv_updated: '2026-10-28'
summary: 非Kählerの場合を含むGauduchon曲面上で、固定した行列式を持つ階数2の放物的Hermitian–Einstein接続のモジュライをコンパクト化する。twisted ASD接続との対応を通じてUhlenbeck型の境界を構成し、失われる第二Chern数と放物的部分線束の次数を二つの零次サイクルで記録する。
abstract_en: ''
summary_en: The paper studies gauge-theoretic limits of rank-two parabolic bundles on compact complex surfaces. By retaining a prescribed holomorphic determinant, it tracks both ordinary bubbling and the change in parabolic degree. The resulting compactification is topological and is designed to include Gauduchon surfaces beyond the projective setting.
abstract_ja: コンパクト複素曲面と滑らかな連結因子を固定し、放物構造と両立する階数2のHermitian–Einstein接続を考える。本論文は、放物的polystable束および行列式を指定したtwisted ASD接続との対応を確立し、その位相を用いてコンパクトHausdorff空間を構成する。境界の理想接続には二つの有効零次サイクルが付随し、因子の外側と上での集中を区別する。非Kählerの場合、得られる空間全体を複素解析空間と主張しているわけではない。
abstract_source_url: https://arxiv.org/abs/2610.38958
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.38958v1](https://arxiv.org/abs/2610.38958)
- **著者:** Xilun Li, Gang Tian
- **初回投稿日:** 2026-10-28
- **最終更新日:** 2026-10-28
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接続のモジュライでは、曲率が点に集中すると元の束の上で滑らかな極限が存在しなくなる。Uhlenbeckコンパクト化は、極限接続と失われたエネルギーを記録する点の情報を組み合わせて、この現象を扱う。

放物構造を入れると、指定した因子に沿う特異な挙動も考慮する必要がある。本論文はGauduchon計量を持つコンパクト複素曲面と滑らかな連結因子に対し、階数2・固定行列式の放物的Hermitian–EinsteinモジュライのUhlenbeck型コンパクト化を構成する。

代数的なコンパクト化が直接使える射影曲面とは異なり、非Kähler曲面では可約接続の部分が奇数次元になることさえある。そのため論文は全体を複素幾何的対象とみなすのでなく、重み付きSobolev位相と理想接続による位相的コンパクト化を構成する。

## 背景と問題設定

$\overline X$をコンパクト複素曲面、$D$を滑らかな連結因子、$X=\overline X\setminus D$とする。階数2の束$E$、$D$上の部分線束$L$、放物重み$\alpha\_1,\alpha\_2$からなる放物束を考え、滑らかな束対$(E,L)$と正則行列式$P$を固定する。

比較対象は、放物的Hermitian–Einstein接続、放物的polystable束、特異ホロノミーを持つtwisted ASD接続の三つである。Kronheimer–Mrowkaの特異接続のコンパクト性を利用するには、これらを対応させる解析と、$PU(2)$極限を行列式固定の束へ持ち上げる位相の両方が必要になる。

## 主結果

### 三種類のモジュライの対応（Theorem 1.1）

Introductionの記号で、自然な全単射

$$
\mathcal M\_h^{\mathrm{par,HE}}(E,L;P)
\simeq\mathcal M\_{\mathrm{pst}}^{\mathrm{par}}(E,L;P)
\simeq\mathcal M\_\beta^{\mathrm{KM}}(E,L;a\_{P,\mathrm{par}})
$$

を得る。最後の空間に重み付きSobolevノルムからの商位相を入れ、他の二つへ引き戻す。この位相の定義により対応は同相となる。strictly stable部分の複素空間としての位相との一致は、Introductionでは期待として述べられており、証明済みの同一視として扱わない。

### コンパクト化と境界の記録（Theorem 1.2）

$\mathcal M\_h^{\mathrm{par,HE}}$を開部分空間として含み、その位相を保つ、コンパクト・Hausdorff・第二可算・距離化可能な空間$\overline{\mathcal M}\_h^{\mathrm{par,HE}}$が存在する。

境界点は$(F\_\ast ,H,\varphi\_F,Z\_0,Z\_1)$というデータを持つ。$F\_\ast =(F,M,\alpha\_1,\alpha\_2)$は同じ曲面と因子上の階数2放物束、$H$は両立するHermitian–Einstein計量、$\varphi\_F:\det F\simeq P$は正則同型であり、$Z\_0,Z\_1$は$\overline X$上の有効零次サイクルで

$$
Z\_0|\_X=Z\_1|\_X,\qquad
c\_2(E)=c\_2(F)+\deg Z\_0,\qquad
\deg L=\deg M+\deg Z\_0-\deg Z\_1
$$

を満たす。因子の外では二つのサイクルが一致するが、因子上での差が部分線束の次数の変化を記録する。これが通常のbubblingに放物構造の情報を加える部分である。

## 証明の見取り図

放物的Hermitian–Einstein接続からtwisted ASD接続へ進む方向では、弱い両立条件とHE方程式から曲率の$L^2$可積分性を示し、さらに重み付きSobolev評価を得る。逆向きではBiquard型の正則束の延長理論を用いる。射影・Kählerの場合の熱流による特定の構成に依存しない点が、非Kähler曲面への拡張で重要となる。

コンパクト性はまず$PU(2)$接続について確立する。その極限を行列式固定の階数2の束へ持ち上げる際にはStiefel–Whitney類とゲージ変換の持ち上げ障害を扱い、必要に応じて2-torsion線束を使う。最後に理想接続の収束と位相基を構成する。正常交叉因子や高次元への拡張は、Introductionが後続研究として区別している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.38958)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.38958v1) — Section 1, pp. 1–4（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; Theorems 6.4, 7.3, Corollary 8.13への対応
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.38958v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
