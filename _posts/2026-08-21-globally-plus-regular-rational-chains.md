---
layout: paper
title: "On rational chain connectedness of globally +-regular varieties"
title_ja: "globally +-regular多様体の有理鎖連結性"
authors: "Emre Alp Özavcı, Zsolt Patakfalvi, Kevin Tucker, Joe Waldron, Zheng Xu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove that globally $+$-regular varieties are rationally chain connected in dimension three and mixed characteristic with residue field characteristic $p>5$. We also introduce a notion of strongly globally $+$-regular, and show that varieties of arbitrary dimension which are strongly globally $+$-regular over a dense open subset of $\mathrm{Spec}(\mathbb{Z})$ are rationally chain connected.
topic: algebraic-geometry
tags:
  - positive-characteristic
  - singularities
  - minimal-model-program
arxiv_id: "2602.16945v1"
arxiv_url: "https://arxiv.org/abs/2602.16945"
arxiv_submitted: "2026-02-18"
arxiv_updated: "2026-02-18"
summary: >-
  mixed characteristicでFrobeniusの代役を果たすglobally $+$-regular性から、有理鎖連結性を導く。剰余標数 $p>5$ の3次元の場合を証明するとともに、摂動を組み込んだstrongly globally $+$-regular性を導入し、適切なmixed-characteristic base上では任意次元の結論を得る。
abstract_en: ""
summary_en: >-
  The paper investigates whether the mixed-characteristic analogue of global $F$-regularity forces rational chain connectedness. It proves this for globally $+$-regular threefolds over mixed-characteristic discrete valuation rings when the residue characteristic exceeds five. A strengthened definition incorporating perturbations is introduced and shown to imply relative rational chain connectedness in arbitrary dimension over a broad arithmetic base. The proofs connect recent mixed-characteristic minimal model theory with classical characteristic-zero results.
abstract_ja: >-
  剰余標数 $p>5$ のmixed characteristicにおいて、3次元のglobally $+$-regular多様体が有理鎖連結であることを示す。またstrongly globally $+$-regularという概念を導入し、$\operatorname{Spec}(\mathbb Z)$ の稠密開集合上でこの性質をもつ任意次元の多様体について有理鎖連結性を証明する。
abstract_source_url: "https://arxiv.org/abs/2602.16945"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.16945v1](https://arxiv.org/abs/2602.16945)
- **著者:** Emre Alp Özavcı, Zsolt Patakfalvi, Kevin Tucker, Joe Waldron, Zheng Xu
- **初回投稿日:** 2026-02-18
- **最終更新日:** 2026-02-18
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標数零ではFano型多様体の有理連結性が知られているが、正標数の特異な場合には消滅定理の不成立が障害となる。global $F$-regular性はFrobeniusを通じてこの問題を扱う一方、mixed characteristicではglobally $+$-regular性が類似の役割を担う。

globally $+$-regular多様体がFano型かどうかは未解決であり、肯定解なら有理鎖連結性が従う。本論文はFano型を経由せず、近年のmixed-characteristic 3次元MMPを使って、剰余標数 $p>5$ の3次元の場合に有理鎖連結性を証明する。

さらに有効因子による小さな摂動に対してglobally $+$-regular性を要求するstrongly globally $+$-regular性を導入する。正標数体上ではこれはglobal $F$-regular性と一致し、mixed characteristicの広い算術的底上では任意次元の相対有理鎖連結性を与える。

通常のglobally $+$-regular性についても、標数零のnon-vanishing予想を仮定すれば同じ任意次元の結論が得られる。この条件付き部分と無条件の3次元結果は明確に区別される。

## 背景と問題設定

射影射 $X\to V$ が $V$ 上有理鎖連結であるとは、各ファイバーが有理鎖連結であることを指す。DVR上では水平な「有理曲線」を定義するのではなく、この相対的定式化を用いる。Introductionによれば、適切な固有等次元族ではgeneric fiberの有理鎖連結性から全ファイバーの結論が従う。

## 主結果

### mixed characteristicの3次元結果（Theorem 1.1）

$R$ を剰余標数 $p>5$ のmixed-characteristic DVR、$V=\operatorname{Spec}(R)$ とする。$(X,\Delta)$ が $V$ へ全射な射影的globally $+$-regular対で

$$
\dim X\leq 3
$$

なら、$X$ は $V$ 上有理鎖連結である。

### 正標数の相対3次元結果（Theorem 1.2）

$V$ がdualizing complexをもつ正標数のexcellent schemeで剰余標数 $p\geq11$、$(X,\Delta)$ が全射かつ射影的globally $+$-regular対で

$$
\dim X-\dim V\leq3
$$

なら、$X$ は $V$ 上有理鎖連結である。

### strongly globally $+$-regularの場合（Theorem 1.3）

$Z$ をmixed characteristicで稠密な閉点をもち、normal、integral、excellentかつdualizing complexをもつschemeとする。全射な射影射 $g:X\to Z$ において $X$ がstrongly globally $+$-regularなら、$X$ は $Z$ 上有理鎖連結である。これは次元を制限しない。

## 証明の見取り図

3次元の場合はglobally $+$-regular性がMMPの各段階で保たれることを使い、mixed characteristicでのMMPをMori fiber spaceまで走らせて帰納する。strongly globally $+$-regularの場合は、底を縮小して標数零generic fiber上で小さな $\mathbb Q$-factorializationとMMPを構成し、摂動可能性によって標準因子がpseudo-effectiveとなる場合を排除してMori fiber spaceへ到達する。ファイバーと底の有理鎖連結性を組み合わせて全体へ戻す。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.16945](https://arxiv.org/abs/2602.16945)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** Introduction末からSection 3への導入
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
