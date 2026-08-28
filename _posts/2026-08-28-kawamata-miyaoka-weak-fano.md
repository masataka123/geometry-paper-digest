---
layout: paper
title: "Kawamata--Miyaoka type inequality for weak Fano varieties"
title_ja: "弱Fano多様体に対する川又–Miyaoka型不等式"
authors: "Haidong Liu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a $\mathbb Q$-factorial $ε$-lc weak Fano variety of dimension $n\geq 2$, where $0<ε\leq 1$ is a real number. Then there exists a Kawamata--Miyaoka type inequality \[ c_1(X)^n\leq \frac{2(1+ε)}ε\,\hat c_2(X)\cdot c_1(X)^{n-2}. \]
topic: algebraic-geometry
tags:
  - singularities
  - fano-varieties
  - chern-classes
  - vector-bundles-sheaves
  - foliations
arxiv_id: "2608.26597v1"
arxiv_url: "https://arxiv.org/abs/2608.26597"
arxiv_submitted: "2026-08-27"
arxiv_updated: "2026-08-27"
summary: >-
  $\mathbb Q$-factorial な $\epsilon$-lc 弱Fano多様体に対し、反標準体積を orbifold 第二Chern類で抑える川又–Miyaoka型不等式を示す。Picard数やFano指数への従来の制限を除き、canonical extension の不安定性と葉層を結びつける。
abstract_en: >-
  Let $X$ be a $\mathbb Q$-factorial $ε$-lc weak Fano variety of dimension $n\geq 2$, where $0<ε\leq 1$ is a real number. Then there exists a Kawamata--Miyaoka type inequality \[ c_1(X)^n\leq \frac{2(1+ε)}ε\,\hat c_2(X)\cdot c_1(X)^{n-2}. \]
summary_en: >-

abstract_ja: >-
  次元2以上の $\mathbb Q$-factorial $\epsilon$-lc 弱Fano多様体に対し、第一Chern類の最高自己交点を orbifold 第二Chern類で制御する不等式を証明する。係数は特異点の幅 $\epsilon$ に明示的に依存し、標準特異点では定数4となる。
abstract_source_url: "https://arxiv.org/abs/2608.26597"
license_name: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.26597](https://arxiv.org/abs/2608.26597)
- **著者:** Haidong Liu
- **初回投稿日・最終更新日:** 2026-08-27
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

弱Fano多様体の反標準類の体積を orbifold 第二Chern類で抑える川又–Miyaoka型不等式を扱う。従来はPicard数1またはFano指数が少なくとも3という条件下で知られていたが、本論文はその制限を除く。

対象は次元 $n\geq2$ の $\mathbb Q$-factorial な $\epsilon$-lc 弱Fano多様体である。特異点の許容度を表す $0<\epsilon\leq1$ が不等式の定数に明示的に現れる。

鍵は接層そのものではなく、反標準類が定める canonical extension の最大不安定化部分層を調べる点にある。これにより、従来法で必要だった水平例外因子がない場合にも有効な因子を取り出す。

## 背景と問題設定

弱Fano多様体の分類では、反標準体積と第二Chern類の交点数を結ぶ不等式が強い制約を与える。Introductionによれば、既知の議論は接層の階数1最大不安定化部分層が定める葉層と $\mathbb P^1$-ファイブレーションを用いるが、一般のPicard数では必要な水平成分が存在しない可能性が障害であった。

本論文は局所分裂する列

$$
0	o\mathcal O_X	o\mathcal E_X	o T_X	o0
$$

で定まる canonical extension $\mathcal E_X$ を用いる。Introductionでは $c_1(\mathcal E_X)=c_1(X)$ および $\widehat c_2(\mathcal E_X)=\widehat c_2(X)$ が重要な橋渡しとなる。

## 主結果

### 主定理（Theorem 1.2 / Theorem 3.1）

$X$ を次元 $n\geq2$ の $\mathbb Q$-factorial な $\epsilon$-lc 弱Fano多様体、$0<\epsilon\leq1$ とすると、

$$
c_1(X)^n\leq \frac{2(1+\epsilon)}{\epsilon}\,\widehat c_2(X)\cdot c_1(X)^{n-2}
$$

が成り立つ。とくに標準特異点の場合は $\epsilon=1$ として

$$
c_1(X)^n\leq4\,\widehat c_2(X)\cdot c_1(X)^{n-2}
$$

を得る。従来のPicard数またはFano指数への追加仮定を不要にした点が新規性である。

## 証明の見取り図

$\mathcal E_X$ が半安定なら $\mathbb Q$-Bogomolov–Gieseker不等式を適用する。非半安定なら最大不安定化部分層を調べ、階数が2以上の場合はLanger型不等式で結論へ進む。階数1の場合、その接層への像が定める代数的葉層を用いる。像とその飽和の差から非自明な有効Weil因子を得ることが、水平例外因子のない場合を補う。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.26597](https://arxiv.org/abs/2608.26597)
- **Introduction:** Section 1, pp. 1–2
- **主要定理:** Theorem 1.2（Theorem 3.1）
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
