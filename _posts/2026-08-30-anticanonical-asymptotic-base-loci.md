---
layout: paper
title: "Anticanonical divisor with good asymptotic base loci"
title_ja: "良い漸近基底軌跡をもつ反標準因子"
authors: "Sung Rak Choi, Sungwook Jang, Dae-Won Lee"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  In this paper, we give a characterization of Fano type varieties in terms of the asymptotic base loci of $-(K_X+Δ)$. We also show that for a potentially lc pair $(X,Δ)$, if no plc centers are contained in the augmented base locus $\mathbf{B}_{+}(-(K_X+Δ))$, then $(X,Δ)$ has a good $-(K_X+Δ)$-minimal model. This gives an analogous result of Birkar--Hu on the existence of good minimal models.
topic: algebraic-geometry
tags: [singularities, fano-varieties, birational-geometry, minimal-model-program, positivity]
arxiv_id: "2411.04628v2"
arxiv_url: "https://arxiv.org/abs/2411.04628"
arxiv_submitted: "2024-11-07"
arxiv_updated: "2025-06-16"
summary: >-
  potential log canonical対と反標準因子の漸近基底軌跡を用いてFano type多様体を特徴づける。さらにplc centerが反対数標準因子のaugmented base locusに含まれなければ、良い反対数標準minimal modelが存在することを示す。
abstract_en: ""
summary_en: >-
  The paper relates Fano type and anticanonical minimal models to asymptotic base loci. A potentially log canonical pair satisfying explicit avoidance conditions for its log-canonical and potentially log-canonical centers has an underlying variety of Fano type. Under a related condition involving the augmented base locus of the negative log-canonical divisor, the pair admits a good anticanonical minimal model. Examples show that the stated hypotheses cannot simply be removed.
abstract_ja: >-
  $-(K_X+\Delta)$の漸近基底軌跡によりFano type多様体を特徴づける。またpotentially lc対$(X,\Delta)$について、plc centerが$\mathbf B_+(-(K_X+\Delta))$に含まれないなら、良い$-(K_X+\Delta)$-minimal modelが存在することを示す。これは良いminimal modelの存在に関するBirkar–Huの結果の反標準版に当たる。
abstract_source_url: "https://arxiv.org/abs/2411.04628"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2411.04628v2](https://arxiv.org/abs/2411.04628v2)
- **著者:** Sung Rak Choi, Sungwook Jang, Dae-Won Lee
- **初回投稿日:** 2024年11月7日
- **最終更新日:** 2025年6月16日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano type多様体はMori dream spaceであり、反標準MMPを実行できるためFano多様体の双有理的前段階とみなせる。本論文は、反対数標準因子の漸近基底軌跡とpotential discrepancyを用いてFano typeを判定する。

potential discrepancyは通常のdiscrepancyから$-(K_X+\Delta)$の漸近的消滅次数を差し引く。これにより対の特異性と反標準因子の非nef locusを同時に測り、potentially lc centerが基底軌跡の悪い部分に入らないという条件を定式化する。

第一の主定理は、三つの明示的条件から$X$がFano typeであることを導く。論文は各条件を一つでも除けば結論が破れる例を与えるとIntroductionで述べる。

第二の主定理は、augmented base locusがplc centerを避けるなら良い反対数標準minimal modelが存在することを示す。対象は必ずしもFano typeでもMori dream spaceでもなく、より広い反標準MMPへの入口となる。

## 背景と問題設定

$-(K_X+\Delta)$が擬有効で、$E$が$X$上の素因子とする。potential discrepancyは

$$
\overline a(E;X,\Delta)
=a(E;X,\Delta)-\sigma_E(-(K_X+\Delta))
$$

である。ここで$\sigma_E$は漸近的divisorial valuationである。全ての$E$についてその下限が$-1$以上ならpotentially lc（plc）と呼ぶ。restricted、stable、augmented base locusの間には一般に

$$
\mathbf B_-(D)\subseteq\mathbf B(D)\subseteq\mathbf B_+(D)
$$

が成り立ち、定理はlc/plc centerがどの基底軌跡を避けるかを精密に使い分ける。

## 主結果

### Fano typeの判定（Theorem 1.1）

$(X,\Delta)$を$\mathbb Q$-factorial plc対で、$X$をklt多様体とする。次を仮定する。

1. $-(K_X+\Delta)$はbigである。
2. $(X,\Delta)$のlc centerは$\mathbf B_-(\Delta)$に含まれない。
3. $(X,\Delta)$のplc centerは$\mathbf B_-(-(K_X+\Delta))$に含まれない。

このとき$X$はFano typeである。Introductionは三条件のいずれも不可欠であると明記する。

### 良い反対数標準minimal model（Theorem 1.2）

$(X,\Delta)$をplc対とし、$-(K_X+\Delta)$を$\mathbb Q$-Cartier big因子とする。plc centerが

$$
\mathbf B_+(-(K_X+\Delta))
$$

に含まれなければ、良い$-(K_X+\Delta)$-minimal modelが存在する。仮定が破れるとminimal modelが存在してもgoodでない例があり、結論の強さに基底軌跡条件が対応する。

## 証明の見取り図

potentially non-klt locusを通常のnon-klt locusと反標準因子のnon-nef locusで挟み、基底軌跡回避条件から適切なlc complementを構成する。小さな係数摂動後にもlc centerを保つよう補因子を選び、通常のlc対に対するBirkar–Huの良いminimal model存在定理へ帰着する。Fano typeの判定ではpklt対とbigな反対数標準因子による既知の特徴づけを用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2411.04628v2](https://arxiv.org/abs/2411.04628v2)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** Section 1, pp. 2–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
