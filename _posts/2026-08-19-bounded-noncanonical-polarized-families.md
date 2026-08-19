---
layout: paper
title: "Boundedness results for families of non-canonically polarized projective varieties"
title_ja: "非標準偏極射影多様体族の有界性"
authors: "Kenneth Ascher, Behrouz Taji"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove that, over a smooth quasi-projective curve, the set of non-isotrivial, smooth and projective families of polarized varieties with a fixed Hilbert polynomial and semi-ample canonical bundle is bounded. This extends the boundedness results of Arakelov, Parshin, and Kovács--Lieblich beyond the canonically polarized case.
topic: algebraic-geometry
tags:
  - moduli
  - positivity
  - birational-geometry
arxiv_id: "2408.15153v2"
arxiv_url: "https://arxiv.org/abs/2408.15153v2"
arxiv_submitted: "2024-08-27"
arxiv_updated: "2026-05-22"
summary: >-
  固定した滑らかな準射影曲線上で、Hilbert多項式を固定し、標準束がsemi-ampleである非定数な滑らかな偏極射影族が有界であることを示す。標準偏極の場合のParshin–ArakelovおよびKovács–Lieblichの結果を越え、一般の底ではmaximal variationのもとで有界性、good minimal modelをもつ族では双有理有界性も得る。
abstract_en: ""
summary_en: >-
  The authors establish boundedness for non-isotrivial smooth projective families over a fixed smooth quasi-projective curve when the fibers have semi-ample canonical bundle, fixed polarization data, and a fixed Hilbert polynomial. This moves beyond the classical canonically polarized setting. Over a higher-dimensional smooth base, they prove the analogous statement under maximal variation. They also obtain birational boundedness for maximally varying families whose fibers admit good minimal models.
abstract_ja: >-
  滑らかな準射影曲線を固定するとき、Hilbert多項式が固定され、標準束がsemi-ampleである偏極多様体の非定数な滑らかな射影族全体が有界であることを証明する。これは標準偏極の場合のArakelov、Parshin、Kovács–Lieblichによる有界性を拡張する結果である。
abstract_source_url: "https://arxiv.org/abs/2408.15153v2"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2408.15153v2](https://arxiv.org/abs/2408.15153v2)
- **著者:** Kenneth Ascher, Behrouz Taji
- **初回投稿日:** 2024年8月27日
- **最終更新日:** 2026年5月22日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

固定した底の上で、ある種類の多様体をファイバーにもつ滑らかな族が有限型のパラメータ空間から得られるか、という有界性問題を扱う。曲線の場合、標準束がampleな標準偏極多様体についてはParshin、ArakelovからKovács–Lieblichへ続く定理があるが、semi-ampleに弱めると既存のモジュライ論をそのまま使えない。

本論文は、滑らかな準射影曲線 $C^0$ 上の非定数な滑らかな偏極射影族で、Hilbert多項式を固定し、ファイバーの標準束がsemi-ampleなもの全体が有界であることを示す。ここで有界とは、有限型の一つの族から底上の同型としてすべてが現れるという意味である。

高次元の滑らかな準射影底 $V$ についても、族のvariationが最大なら同じ有界性を得る。さらに、semi-ample標準束より広いgood minimal modelをもつファイバーについては、同じmaximal variationの仮定のもとで双有理有界性を証明する。

新しい点は、偏極多様体の同型類を表すViehwegの通常のモジュライfunctorが、双有理的なvariationと必ずしも整合しない障害を迂回することにある。二重埋め込みされたschemeのHilbert functorを中間の表現可能なパラメータ空間として用い、そこで粗モジュライ写像を有界化してから元の問題へ降下する。

## 背景と問題設定

標準偏極の場合の証明は、粗モジュライ空間への写像を有界化し、compactifiableなDeligne–Mumford stackを介して族そのものを有界化する二段階からなる。semi-ampleの場合もモジュライstackはcompactifiableだが、偏極同型類の粗モジュライ写像が双有理的variationを正しく反映しない。

具体的には、$\det(f_*\omega_{X/B}^m)$ の正値性をArakelov型不等式から得るにはvariationが必要である。しかし双有理的にisotrivialな族でも偏極の違いによって粗モジュライ写像が収縮されないことがあり、行列式線束と粗空間上のample線束の対応が壊れる。

## 主結果

### 曲線上の有界性（Theorem 1.1）

任意の滑らかな準射影曲線 $C^0$ とHilbert多項式 $h$ を固定する。$C^0$ 上の非isotrivialで滑らかな偏極射影族のうち、各ファイバーの標準束がsemi-ampleでHilbert多項式が $h$ となるもの全体は有界である。標準束がampleな場合の古典的結果を、標準偏極でない領域へ拡張する。

### 高次元底での有界性（Theorem 1.3）

任意の滑らかな準射影多様体 $V$ 上で、同じファイバー条件と固定Hilbert多項式を課し、さらにvariationが最大であるとする。このとき族全体は有界である。曲線上の非isotrivial性は、このmaximal variation条件に対応する。

### good minimal modelをもつ族（Theorem 1.5）

$V$ と $h\in\mathbb Q[x]$ を固定する。good minimal modelをもちmaximal variationである滑らかな偏極射影族は双有理有界である。ここでは一般に同型としての有界性ではなく、底上の双有理同値までの有界性が自然な結論となる。

## 証明の見取り図

著者らは、普遍族をもつ準射影schemeで表現される「二重埋め込みschemeのHilbert functor」を導入する。普遍族に適切な偏極を選ぶことで、variationとの整合性を回復し、このパラメータ空間へのモジュライ写像を有界化する。

次にpullbackとdescentを通じて、この有界性をsemi-ample標準束をもつ偏極多様体のViehwegモジュライfunctorへ移す。maximal variationまたは曲線上の非isotrivial性がこの段階で用いられる。最後にstackのcompactifiabilityとKovács–Lieblich型の一般定理を適用し、粗モジュライ写像の有界性から族の有界性を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2408.15153v2](https://arxiv.org/abs/2408.15153v2)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.5
- **論文構成の説明:** Section 1.B, pp. 4–5
- **確認したarXivバージョン:** v2（requested_version未指定のため確認時の最新版）
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
