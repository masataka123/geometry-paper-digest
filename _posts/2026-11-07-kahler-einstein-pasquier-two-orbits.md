---
layout: paper
title: Kähler-Einstein metrics on Pasquier's two-orbits varieties
title_ja: Pasquierの二つの例外的二軌道多様体のKähler–Einstein計量
authors: Akihiro Kanemitsu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We show that there exist K\"ahler-Einstein metrics on two exceptional Pasquier's two-orbits varieties. As an application, we will provide a new example of K-unstable Fano manifold with Picard number one.
topic: algebraic-geometry
tags:
- kahler-einstein-metrics
- k-stability
- fano-varieties
arxiv_id: 2101.01351v2
arxiv_url: https://arxiv.org/abs/2101.01351v2
arxiv_submitted: '2021-01-05'
arxiv_updated: '2021-01-16'
summary: Pasquierが分類した二軌道Fano多様体のうち、二つの例外的な場合にKähler–Einstein計量が存在することを示す。応用として、種数7の特殊なMukai 8-foldがK半安定でないことを導く。
abstract_en: ''
summary_en: Pasquier’s classification leaves two exceptional two-orbit Fano manifolds beyond the horospherical cases. This paper proves that both exceptional manifolds are K-polystable and hence admit Kähler-Einstein metrics. It uses an equivariant valuative criterion rather than a criterion specific to spherical varieties. The comparison between two genus-seven Mukai eightfolds then yields an example that is not K-semistable.
abstract_ja: Picard数一で、連結自己同型群の作用が二軌道をもち、閉軌道のblow-up後も二軌道となるFano多様体のうち、二つの例外的な多様体にKähler–Einstein計量が存在することを示す。具体的にはF4に対応する23次元の例とA1×G2に対応する8次元の例を扱う。応用として、種数7の特殊なMukai 8-foldはK半安定でなく、Kähler–Einstein計量をもたないことが分かる。
abstract_source_url: https://arxiv.org/abs/2101.01351v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2101.01351v2](https://arxiv.org/abs/2101.01351v2)
- **著者:** Akihiro Kanemitsu
- **初回投稿日:** 2021-01-05
- **最終更新日:** 2021-01-16
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

自己同型群の作用が開軌道と閉軌道の二つだけをもつFano多様体は、等質空間に近い対称性をもちながら、非自明な幾何を残す対象である。Pasquierは、Picard数一で閉軌道のblow-up後も二軌道となるものを分類していた。

その分類のhorosphericalな場合には、自己同型群が簡約でないためKähler–Einstein計量が存在しない。本論文は残る二つの例外的な場合を扱い、どちらにもKähler–Einstein計量が存在することを示す。証明は、群作用と両立する付値によるK安定性の判定を使う。

さらに8次元の例を、種数7のMukai 8-foldの一般型と同定する。この一般型から特殊型への退化とKモジュライの性質を組み合わせることで、特殊型がK半安定でないことを導く。正の存在結果と、Picard数一でもK不安定となる例が同時に得られる。

## 背景と問題設定

Condition 0.1は、Fano多様体 $X$ のPicard数が一であり、$G=\operatorname{Aut}^0(X)$ が開軌道 $X^0$ と閉軌道 $Z$ の二つをもち、$\operatorname{Bl}\_ZX$ も開軌道と例外因子からなる二軌道多様体である、という条件である。

Pasquierの分類によれば、そのような $X$ はhorosphericalな場合のほか、

$$
\mathcal P\_{F\_4}\quad(\dim=23),\qquad
\mathcal P\_{A\_1\times G\_2}\quad(\dim=8)
$$

の二つの例外に分かれる。horosphericalな場合の非存在は、自己同型群の非簡約性とMatsushimaの障害による。従って残る問題は、二つの例外が実際に計量をもつかどうかであった。

## 主結果

### 二つの例外のKähler–Einstein計量（Theorem 0.2）

$\mathcal P\_{F\_4}$ と $\mathcal P\_{A\_1\times G\_2}$ にはKähler–Einstein計量が存在する。より正確には、両者がK-polystableであることを示し、Fano多様体に対する存在との同値性を適用する（Remark 0.4）。

これによりPasquierの該当する分類の中で、非存在が分かっていたhorosphericalな例と、存在する二つの例外が分離される。IntroductionはDelcroixによる独立な証明にも言及し、そちらがspherical多様体の判定を使うのに対し、本論文はその性質に依存しない等変付値的判定を使うと説明する。

### 特殊なMukai 8-foldのK不安定性（Corollary 0.5）

種数7のMukai 8-foldには、一般型 $X\_{\mathrm{gen}}$ と特殊型 $X\_{\mathrm{sp}}$ の二つの同型類があり、一般型が特殊型へ退化する。論文は

$$
\mathcal P\_{A\_1\times G\_2}\simeq X\_{\mathrm{gen}}
$$

を用い、$X\_{\mathrm{sp}}$ がK半安定ではないことを導く。従って $X\_{\mathrm{sp}}$ にはKähler–Einstein計量が存在しない。

単にK-polystableでないという結論より強く、K半安定性自体が否定される。Introductionでは、これがPicard数一のFano多様体に関するOdaka–Okadaの予想への新たな反例になると位置付けられている。

## 証明の見取り図

Introductionが明示する方法の中心は、$G$ 等変な付値的K安定性判定である。まず二軌道多様体の幾何を整理し、その対称性と両立する付値を用いてK-polystabilityを示す。spherical多様体一般の専用判定を直接使う独立証明とは方法が異なる。

Mukai 8-foldへの応用では、一般型との同定と退化関係を、Kモジュライの一般的な性質に結び付ける。付値の具体的な計算や後続節の証明はこの記事の確認範囲に含めず、Introductionで述べられた結果と方法の関係を説明した。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2101.01351v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2101.01351v2) — 指定版v2のIntroduction, pp. 1–2（Section 1開始直前まで）
- **Introduction中で言及された主要結果:** Theorem 0.2; Corollary 0.5; Condition 0.1; Remarks 0.3–0.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2101.01351v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
