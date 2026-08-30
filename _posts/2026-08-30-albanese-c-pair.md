---
layout: paper
title: "The Albanese of a C-pair"
title_ja: "C対のAlbanese"
authors: "Stefan Kebekus, Erwan Rousseau"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  Written with a view toward applications in hyperbolicity, rational points, and entire curves, this paper addresses the problem of constructing Albanese maps within Campana's theory of C-pairs (or "geometric orbifolds"). It introduces C-semitoric pairs as analogs of the (semi)tori used in the classic Albanese theory and follows Serre by defining the Albanese of a C-pair as the universal map to a C-semitoric pairs. The paper shows that the Albanese exists in relevant cases, gives sharp existence criteria, and conjectures that a "weak Albanese" exists unconditionally.
topic: algebraic-geometry
tags: [complex-analytic-spaces]
arxiv_id: "2410.00405v2"
arxiv_url: "https://arxiv.org/abs/2410.00405"
arxiv_submitted: "2024-10-01"
arxiv_updated: "2024-11-11"
summary: >-
  CampanaのC対に対し、C-semitoric対への普遍的な準代数的C射としてAlbaneseを定義する。コンパクトKähler正規交差C対では、その存在がAlbanese irregularityの有限性と同値であることを示し、特殊対ではこの不変量が次元以下になることも証明する。
abstract_en: ""
summary_en: >-
  This work constructs an Albanese theory adapted to Campana pairs. It replaces semi-tori by C-semitoric pairs and defines the Albanese through a universal property for quasi-algebraic morphisms of pairs. A new Albanese irregularity records the adapted differentials that arise from maps to semi-toric targets. For compact Kähler normal-crossing pairs, finiteness of this invariant is exactly the criterion for the universal Albanese object to exist.
abstract_ja: >-
  双曲性、有理点、整曲線への応用を見据え、CampanaのC対にAlbanese写像を構成する。古典的なトーラスおよび半トーラスに対応するC-semitoric対を導入し、C対のAlbaneseをそこへの普遍的な準代数的C射として定義する。関連する場合の存在と鋭い存在判定を与え、無条件に存在し得る弱いAlbaneseも予想する。
abstract_source_url: "https://arxiv.org/abs/2410.00405"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2410.00405v2](https://arxiv.org/abs/2410.00405v2)
- **著者:** Stefan Kebekus, Erwan Rousseau
- **初回投稿日:** 2024年10月1日
- **最終更新日:** 2024年11月11日
- **主分類・副分類:** math.AG（主分類）、math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的Albanese写像は、多様体からアーベル多様体への全ての射を一つの普遍射を通して記述する。対数対では半トーラスへの準代数的射が同じ役割を果たす。本論文はこの枠組みを、境界係数が分岐・接触条件を符号化するC対へ拡張する。

値域としてC-semitoric対を導入する。これはトーラスや半トーラスの商に自然なC対構造を入れた対象であり、その間の準代数的C射は群準同型から生じる。

一方、C対には普遍Albaneseが常に存在するとは限らない。著者らは、半トーラスへの射に由来する適合微分形式を測るAlbanese irregularity $q^+_{\rm Alb}(X,D)$を定義し、その有限性が存在の正確な条件であることを示す。

特殊C対ではこの不変量が次元以下になる。この結果は、特殊性、有理点の潜在的稠密性、整曲線の存在を結ぶCampanaの予想にAlbanese的方法を適用するための基礎を与える。

## 背景と問題設定

古典的には$\operatorname{alb}:X\to\operatorname{Alb}(X)$が、任意のアーベル多様体への射を一意的に分解する。対数対$(X,D)$では$X\setminus D$から半トーラスへの準代数的射が対象となる。C対では有限多重度の境界を保つ射の概念が必要であり、通常の半トーラスだけでは普遍性を表現できない。

Albanese irregularity

$$
q^+_{\rm Alb}(X,D)\in\mathbb N\cup\{\infty\}
$$

は、適合被覆上の全ての微分形式ではなく、半トーラスへの射から誘導されるものを数える。そのためaugmented irregularity $q^+(X,D)$との間に$q^+_{\rm Alb}(X,D)\leq q^+(X,D)$がある。

## 主結果

### C-semitoric対の剛性（Theorem 1.5 / Theorem 9.4）

C-semitoric対の間の準代数的C射は群準同型から生じる。この剛性により、C-semitoric対が古典的Albanese理論の値域として機能する。

### 特殊対のAlbanese irregularity（Theorem 1.6）

$(X,D)$がCampanaの意味で特殊なら

$$
q^+_{\rm Alb}(X,D)\leq\dim X
$$

が成り立つ。大きいAlbanese irregularityは特殊性に反する幾何を検出する。

### Albaneseの存在判定（Theorem 1.7 / Theorem 10.2, Proposition 10.5）

$(X,D)$を、$X$がコンパクトKähler多様体であるnc C対とする。このときC対のAlbaneseが存在することと

$$
q^+_{\rm Alb}(X,D)<\infty
$$

は同値である。無限の場合には、弱い普遍性やind-varietyを用いる「weak Albanese」の可能性が未解決問題として残る。

## 証明の見取り図

Serreの普遍性によるAlbanese構成を出発点とし、有限被覆上の半トーラスへの射と適合微分形式を組織化する。C-semitoric対の射の剛性が異なる被覆上のデータを比較可能にする。Albanese irregularityが有限なら有限段階で普遍対象を構成でき、逆に普遍対象の存在はそこから生じる微分形式の次元を有限に抑える。

## 原論文との対応

- **Abstractページ:** [arXiv:2410.00405v2](https://arxiv.org/abs/2410.00405v2)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.5, 1.6, 1.7
- **論文構成の説明:** Sections 1.1.1–1.1.4, pp. 2–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
