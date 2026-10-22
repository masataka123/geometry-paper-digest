---
layout: paper
title: $G$-birational rigidity of the $G$-Fano variety $\mathbb{P}^1 \times \mathbb{P}^1 \times \mathbb{P}^1$
title_ja: 三重射影直線積の同変双有理剛性の判定
authors: Nikolai Stor
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We determine the $G$-birational rigidity of the $G$-Fano variety $\mathbb{P}^1 \times \mathbb{P}^1 \times \mathbb{P}^1$ for all finite subgroups $G$ of $\mathrm{Aut}(\mathbb{P}^1 \times \mathbb{P}^1 \times \mathbb{P}^1)$.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- minimal-model-program
- toric-geometry
arxiv_id: 2610.25393v1
arxiv_url: https://arxiv.org/abs/2610.25393
arxiv_submitted: '2026-10-18'
arxiv_updated: '2026-10-18'
summary: 有限群が作用する三重射影直線積について、同変双有理超剛性を完全に判定する。群の作用が三つのrulingを推移的に入れ替えるという極小性の下で、正次元底のMoriファイバー空間へ移れないことと超剛性が同値になり、その失敗を群論的条件と不変曲線・線形束で記述する。
abstract_en: ''
summary_en: The paper studies how a finite symmetry group restricts the birational models of a product of three projective lines. Under equivariant minimality, it identifies solidity with birational superrigidity. The failures are described by a short list combining Weyl-group data with invariant curves and pencils. This completes the toric-group case and also treats non-toric actions.
abstract_ja: 三重射影直線積 P¹×P¹×P¹ に対し、その自己同型群の有限部分群による作用を考え、G-Fano多様体としての同変双有理剛性を決定する。トーラスを正規化する群だけでなく、非トーリックな有限群も扱う。
abstract_source_url: https://arxiv.org/abs/2610.25393
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25393v1](https://arxiv.org/abs/2610.25393)
- **著者:** Nikolai Stor
- **初回投稿日:** 2026-10-18
- **最終更新日:** 2026-10-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$\mathbb P^1\times\mathbb P^1\times\mathbb P^1$ 自体はよく知られたFano三次元多様体だが、有限群の作用を保つという制約を加えると、その双有理幾何は作用に大きく依存する。本論文は、どの作用なら別のMoriファイバー空間へ移れないのかを判定する。

主要な結論は、$G$-極小な作用の下では $G$-solid と $G$-双有理超剛性が同値になることである。正次元の底をもつファイバー空間への移行を防ぐだけで、より強い超剛性まで従う。

さらに失敗の原因は五つの条件に絞られる。トーリック群のWeyl群像に関する条件に加え、不変な三重次数 $(1,1,1)$ の曲線、互いに交わらない二曲線、不変なpencilが現れる。大きいトーリック群に対する従来の十分条件から、すべての有限群を扱う判定へ進む点が新しい。

## 背景と問題設定

同変極小モデル・プログラムで現れる $G$-Moriファイバー空間のうち、底が一点の場合が $G$-Fano多様体である。$X=(\mathbb P^1)^3$ は滑らかで反標準束が豊富なので、$G$-Fanoとなるための非自明な条件は

$$
\operatorname{rk}\operatorname{Pic}(X)^G=1
$$

という $G$-極小性である。Introductionでは、これは三つのrulingへの作用の推移性と同値と説明される。

$G$-solid は、正次元の底をもつ $G$-Moriファイバー空間と $G$-双有理にならない性質である。一方、超剛性は $X$ から非自明な $G$-Sarkisov link が出ないことを意味する。トーリックな $G$ とは極大トーラス $T$ を正規化する群であり、$T\_G=G\cap T$ とWeyl群への像 $W\_G$ による完全列

$$
1\longrightarrow T\_G\longrightarrow G\longrightarrow W\_G\longrightarrow1
$$

を使って作用を整理する。

## 主結果

### Solidityと超剛性の同値および例外の判定（Theorem 1.2）

$G\subset\operatorname{Aut}(X)$ を有限群とし、$X$ が $G$-極小であると仮定する。このとき

$$
X\text{ が }G\text{-solid}\quad\Longleftrightarrow\quad
X\text{ が }G\text{-双有理超剛的}
$$

である。また $G$-solid でないための必要十分条件は、次のいずれかが成り立つことである。

1. $G$ はトーリックで、$W\_G$ は $A\_4$ を含まない。
2. $G$ はトーリックで、$W\_G\supset A\_4$ かつ $G\cong A\_4\rtimes\mu\_4$。
3. $G$-不変な $(1,1,1)$-曲線が存在する。
4. 互いに交わらない二本の $(1,1,1)$-曲線からなる $G$-不変な組が存在する。
5. $|\mathcal O\_X(1,1,1)|$ に $G$-不変なpencilが存在する。

ここで $A\_4$ は交代群、$\mu\_4$ は四乗根の群を表す。第四条件は二曲線の組全体が不変という条件であり、各曲線を個別に固定するという強い条件に置き換えない。条件群は例外を判定するための選言であり、互いに排他的だとは述べていない。

### 不変pencilによる障害（Lemma 1.1）

$\operatorname{rk}\operatorname{Pic}(X)^G=1$ の下で、$|\mathcal O\_X(1,1,1)|$ に不変pencilがあれば $X$ は $G$-solid ではない。この補題は、群作用の線形系に関する情報を、同変双有理幾何の障害として読む入口となる。

## 証明の見取り図

Introductionの構成説明では、まずトーリック群をWeyl群像と小さいトーリック核に分けて分類し、必要な軌道分解を求める。次に小さい三重次数の不変曲線を調べ、大きい群ではトーラス不変曲線の合併に制限されることと、残る個別の群での曲線計算を区別する。

その情報を使ってトーリック群の剛性を証明し、最後に非トーリック群を分類して扱う。原論文は群論・軌道・線形系などの計算にSageMathを用いたと述べるが、本記事では計算コードを実行せず、Introductionの結果と方針を紹介している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.25393)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25393v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.2；Lemma 1.1；比較対象の既知結果Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25393v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
