---
layout: paper
title: "An affine local criterion for toric projective space bundles"
title_ja: "トーリック射が射影空間束となるアフィン局所判定法"
authors: "Osamu Fujino, Hiroshi Sato"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study when an equidimensional toric morphism is forced to be a projective-space bundle. Our main result is an affine rigidity theorem: if the base space is affine, the toric relative canonical divisor is $\mathbb Q$-Cartier, and its negative has degree greater than the relative dimension on every complete curve, then the morphism is equivariantly a trivial projective-space bundle. As an application, we derive a projective-space-bundle theorem for equidimensional toric contractions associated to long extremal rays, without assuming $\mathbb Q$-factoriality.
topic: algebraic-geometry
tags:
  - toric-geometry
  - positivity
arxiv_id: "2608.10849v1"
arxiv_url: "https://arxiv.org/abs/2608.10849"
arxiv_submitted: "2026-08-11"
arxiv_updated: "2026-08-11"
summary: >-
  等次元なトーリック射について、相対反標準因子の全ての完全曲線上での次数が相対次元を超えるなら、アフィンな底の上で射影空間との直積になることを示す。全空間の $\mathbb Q$-factorial 性を仮定しない剛性定理であり、長い端射線に付随する縮約へ応用される。
abstract_en: ""
summary_en: >-
  This paper gives an affine rigidity criterion for an equidimensional toric morphism. Positivity of the negative toric relative canonical divisor beyond the relative dimension on every complete curve forces an equivariant product with projective space. The argument works without assuming that the total space is $\mathbb Q$-factorial and yields a global consequence for contractions of long extremal rays.
abstract_ja: >-
  等次元トーリック射が射影空間束になる条件を研究する。底がアフィンで、トーリック相対標準因子が $\mathbb Q$-Cartier、かつその負が全ての完全曲線上で相対次元より大きい次数をもつなら、射は同変に自明な射影空間束となる。応用として、$\mathbb Q$-factorial 性なしに長い端射線に対応する等次元トーリック縮約の射影空間束定理を得る。
abstract_source_url: "https://arxiv.org/abs/2608.10849"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.10849](https://arxiv.org/abs/2608.10849)
- **著者:** Osamu Fujino, Hiroshi Sato
- **初回投稿日・最終更新日:** 2026年8月11日（v1）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

対象は、連結ファイバーをもつ固有・全射・等次元なトーリック射 $\varphi:X\to Y$ である。従来、長い端射線に対応する射影空間束構造は $X$ の $\mathbb Q$-factorial 性の下で知られていた。

本論文は底 $Y$ がアフィンなら、相対反標準因子の曲線次数だけから直積構造が従うことを示す。特に全空間も底も $\mathbb Q$-factorial とは仮定しない。

鍵は、一般ファイバーを $\mathbb P^d$ と同定した後、ファンの水平部分に残り得る有限指数のずれを数値条件で排除する点にある。この局所定理から、長い端射線に付随する大域的縮約の射影空間束構造も導かれる。

## 背景と問題設定

相対次元を $d=\dim X-\dim Y>0$ とし、トーリック相対標準因子を

$$
K_{X/Y}=K_X-\varphi^{[*]}K_Y
$$

と定める。ここで $\varphi^{[*]}$ は底の滑らかな部分上で引き戻して閉包を取る操作である。問題は、$-K_{X/Y}$ の長さ条件が局所的な射影空間束構造をどこまで強制するかである。

## 主結果

### アフィン局所射影空間束判定（Theorem 4.1）

$Y$ をアフィントーリック多様体とし、$\varphi:X\to Y$ を連結ファイバーをもつ固有・全射・等次元トーリック射とする。$K_{X/Y}$ が $\mathbb Q$-Cartier で、全ての完全既約曲線 $C\subset X$ に対して

$$
-K_{X/Y}\cdot C>d
$$

が成り立つなら、$Y$ 上の同変同型

$$
X\simeq \mathbb P^d\times Y
$$

が存在し、$\varphi$ は第二射影に一致する。結論は単なる局所自明性より強く、アフィン底上の同変な自明化である。

### 大域的帰結（Corollary 4.8）

Introductionでは概略として、対応する相対長さ条件を満たす等次元トーリック端縮約が射影空間束になると述べられている。ここでも全空間の $\mathbb Q$-factorial 性は不要である。

## 証明の見取り図

まず一般ファイバー $F$ では $K_{X/Y}|_F=K_F$ であり、長い端射線の評価から $F\simeq\mathbb P^d$ を得る。次に底のファンの各rayが全空間のファンにただ一つのprimitive liftをもつことを、一変数アフィン底の場合の議論で示す。これらのliftは水平subfanを作り、実ベクトル空間上ではファンが水平部分と $\mathbb P^d$ の標準ファンに分裂する。最後に水平格子が非飽和なら、ある完全トーラス不変曲線について

$$
-K_{X/Y}\cdot C=\frac{d+1}{q}\le d\qquad(q\ge2)
$$

となり仮定に反するため、格子レベルでも分裂する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.10849](https://arxiv.org/abs/2608.10849)
- **Introduction:** Section 1, pp. 1–2
- **主要結果:** Theorem 4.1, Corollary 4.8
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
