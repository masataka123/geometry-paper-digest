---
layout: paper
title: "The moduli space of Higgs pairs"
title_ja: "Higgs対のモジュライ空間"
authors: "Jun Sasaki"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - moduli
  - stability
  - higgs-nonabelian-hodge
arxiv_id: "2604.24400v1"
arxiv_url: "https://arxiv.org/abs/2604.24400"
arxiv_submitted: "2026-04-27"
arxiv_updated: "2026-04-27"
summary: >-
  Higgs束とその正則切断からなるHiggs対にτ安定性を導入し、Higgs束版vortex方程式とのKobayashi–Hitchin対応を定式化する。曲線上では適切なτのもとでモジュライの滑らかさ、階数2のPoincaré多項式、安定Higgs束モジュライへのファイブレーションを調べる。
abstract_en: ""
summary_en: >-
  This work develops a stability theory and a Kobayashi–Hitchin correspondence for Higgs pairs, consisting of a Higgs bundle together with a compatible section. Their gauge-theoretic counterparts solve a vortex equation adapted to Higgs bundles. Over a compact Riemann surface, the paper studies smoothness of the stable-pair moduli space for suitable parameters and computes its Poincaré polynomial in rank two. It also constructs, under additional assumptions, a fibration to the moduli space of stable Higgs bundles.
abstract_ja: >-
  正則対を一般化するHiggs対を導入し、実数パラメータ$\tau$に依存する安定性と、Higgs束に対するvortex方程式とのKobayashi–Hitchin対応を扱う。基礎がコンパクトRiemann面の場合、適切な$\tau$で安定Higgs対のモジュライが非特異複素多様体になることを示す。階数2ではPoincaré多項式を決定し、追加仮定のもとで安定Higgs束のモジュライへの写像がファイブレーションになることも証明する。
abstract_source_url: "https://arxiv.org/abs/2604.24400"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.24400v1](https://arxiv.org/abs/2604.24400v1)
- **著者:** Jun Sasaki
- **初回投稿日・最終更新日:** 2026年4月27日（確認対象のv1）
- **主分類・副分類:** math.DG（主分類、副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Higgs束に対するKobayashi–Hitchin対応は、代数的な安定性とHermitian–Yang–Mills接続の存在を結ぶ。本論文はHiggs束$(E,D'')$に$D''s=0$を満たす切断$s$を加えたHiggs対を対象とし、正則対に対するvortex理論をHiggs幾何へ拡張する。

ゲージ理論側の中心方程式は

$$
\sqrt{-1}\Lambda R(D)+\frac12s\circ s^*=\frac\tau2\operatorname{id}_E,
\qquad D''s=0.
$$

これはdoubly-coupled vortex方程式で片方の束を自明な直線束とし、一方の射を消した特殊化として導かれる。Higgs対をquiver bundleの一例と見ることで、$\tau$安定性とこの方程式の解を対応させる。

コンパクトRiemann面上ではモジュライ空間そのものを解析する。Higgs場$\theta$と切断$s$の間に$\theta(s)=0$という追加関係があるため、通常のquiver bundleの変形理論をそのまま適用せず、専用の変形複体を用いる点が重要である。

## 背景と問題設定

通常の正則対からはBradlow型vortex方程式が生じる。Higgs束の場合にはChern接続をHitchin–Simpson接続へ置き換えるだけでなく、Higgs場と切断の両立条件を変形中も保存する必要がある。本論文の$\tau$安定性は、すべてのHiggs部分層$F$についての傾き条件と、切断を含む部分層についての商$E/F$の傾き条件を組み合わせる。

適切な壁を避ける$\tau$を選ぶと、方程式の可解性と$\tau$安定性が直接対応する。曲線上のモジュライでは、滑らかさを妨げる変形複体の第2コホモロジーを明示的に消すことが課題になる。

## 主結果

### Kobayashi–Hitchin対応

Introductionでは概略として、Higgs対$(D'',s)$が$\tau$安定であることと、あるHermitian計量に関して上の$\tau$-vortex方程式を満たすことが対応すると述べられている。厳密にはpolystableな直和成分を許す場合分けがあり、$\tau$が部分束の傾きから定まる壁を避ければ安定性との同値になる。

### モジュライの滑らかさ（Propositions 5.3–5.4）

基礎がコンパクトRiemann面で$\tau$を適切に選ぶと、安定Higgs対のモジュライ$\mathcal M^{st}_{HP}$は非特異複素多様体となる。論文はHiggs対固有の変形複体を記述し、その第2コホモロジーの消滅から障害がないことを示す。

### 階数2のトポロジー（Theorem 5.7）

階数2の場合に$\mathcal M^{st}_{HP}$のPoincaré多項式を決定する。Introductionによれば、モジュライがKähler計量とHamiltonian円作用を持つことを用い、対応するmoment mapの臨界集合を解析するMorse理論的手法を採る。

### 安定Higgs束モジュライへの写像（Proposition 5.8）

追加仮定のもとで、安定Higgs対のモジュライから安定Higgs束のモジュライへの写像を構成し、それがファイブレーションであることを示す。これは正則対についてのBradlow–Daskalopoulosの結果のHiggs版に当たる。

## 証明の見取り図

まず$SU(2)$不変なHYM方程式を次元縮約し、doubly-coupled vortex方程式を得る。自明直線束への特殊化からHiggs対の方程式を取り出し、quiver bundleの一般的Kobayashi–Hitchin対応を適用する。曲線上では独自の楕円型変形複体で滑らかさを証明し、階数2ではHamiltonian円作用のmoment mapにMorse理論を適用してPoincaré多項式を計算する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.24400v1](https://arxiv.org/abs/2604.24400v1)
- **Introduction:** Section 0, pp. 1–5
- **Introduction中の主要結果:** Propositions 5.3, 5.4, Theorem 5.7, Proposition 5.8
- **確認したarXivバージョン:** v1（Abstractページには後続v2も表示）
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
