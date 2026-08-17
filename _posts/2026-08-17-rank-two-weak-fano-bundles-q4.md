---
layout: paper
title: "Rank-two weak Fano bundles on a four-dimensional quadric hypersurface $Q^4$"
title_ja: "4次元二次超曲面上の階数2弱Fano束"
authors: "Yuta Takahashi"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.13916v1"
arxiv_url: "https://arxiv.org/abs/2608.13916"
arxiv_submitted: "2026-08-14"
arxiv_updated: "2026-08-14"
summary: >-
  滑らかな4次元二次超曲面 $Q^4$ 上の階数2弱Fanoベクトル束を、直線束による捩りを除いて分類する。
  分裂束、2種類のスピノル束、または $c_1=-H_{Q^4}$、$c_2=\alpha+\beta$ の既知の安定束だけが現れることを示す。
abstract_en: >-
  We classify rank $2$ weak Fano bundles on a four-dimensional smooth quadric hypersurface $Q^4$. Up to twisting with a line bundle, such a bundle is either a split bundle, a spinor bundle, or one of the stable bundles with Chern classes $c_1=-1$ and $c_2=(1,1)$ constructed in [APW94].
summary_en: ""
abstract_ja: >-
  滑らかな4次元二次超曲面 $Q^4$ 上の階数2弱Fano束を分類する。直線束で捩る違いを除けば、分裂束、スピノル束、または第一Chern類が $-H_{Q^4}$、第二Chern類が二つの平面族の類の和となる既知の安定束のいずれかである。
abstract_source_url: "https://arxiv.org/abs/2608.13916"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.13916](https://arxiv.org/abs/2608.13916)
- **著者:** Yuta Takahashi
- **初回投稿日:** 2026年8月14日
- **最終更新日:** 2026年8月14日（v1）
- **主分類・副分類:** math.AG（主分類。副分類なし）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

ベクトル束 $E$ の射影化 $\mathbb P(E)$ が弱Fano、すなわち $-K_{\mathbb P(E)}$ が nef かつ big であるとき、$E$ を弱Fano束という。本論文は滑らかな4次元二次超曲面 $Q^4$ 上の階数2の場合を完全に分類する。

高次元二次超曲面では既に分類があったが、$Q^4$ では余次元2のChow群が二つの平面族の類 $\alpha,\beta$ で生成され、第二Chern類に二つの独立成分がある。この例外的な数値構造のため、従来の数値的絞り込みだけでは候補が多く残る。

主定理は、直線束による捩りを除けば、分裂束、二つのスピノル束、またはAPW94で構成された特定の安定束しか存在しないと述べる。中心となるChern類条件まで明示され、4次元で残っていた分類の穴を埋める。

## 背景と問題設定

$X$ を標数0の代数閉体上の滑らかな射影多様体とする。$E$ がFano束であるとは $-K_{\mathbb P(E)}$ が ample であること、弱Fano束であるとはこれを nef かつ big に弱めることである。

$Q^4$ では

$$
A^2(Q^4)\simeq\mathbb Z\alpha\oplus\mathbb Z\beta
$$

であり、$\alpha,\beta$ は二つの族に属する平面の類である。したがって $c_2(E)=a\alpha+b\beta$ と二成分で記録する必要があり、これが次元5以上との本質的な差になる。

## 主結果

### 主定理（Theorem 1.1）

$E$ を滑らかな $Q^4$ 上の階数2弱Fano束とする。直線束による捩りを除いて、$E$ は次のいずれかである。

1. 二つの直線束の直和。
2. $Q^4$ 上の二つのスピノル束のいずれか。
3. $H_{Q^4}$-安定で
   $$
   c_1(E)=-H_{Q^4},\qquad c_2(E)=\alpha+\beta
   $$
   を満たす、APW94, Example 2.2の束。

とりわけ、分類は単なるChern類候補の列挙ではなく、各候補の幾何学的型まで特定している。

## 証明の見取り図

まず直線束で捩って $c_1(E)=0$ または $-H_{Q^4}$ に正規化する。弱Fano条件から $\mathbb P(E)$ 上の特定の tautological divisor が nef かつ big となり、APW94型の数値不等式によって $c_2(E)=a\alpha+b\beta$ の範囲を有限個へ絞る。

次にRiemann–Roch、消滅定理、$\mathbb P(E)$ 上の交点計算、分裂判定を組み合わせる。$Q^4$ 特有の残余候補には平面への制限と二次超曲面上の linear-uniform bundle の分類を用い、$c_1=0,c_2=2\alpha+2\beta$ の候補は nef かつ big なベクトル束に対するSchneiderの消滅定理で排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.13916](https://arxiv.org/abs/2608.13916)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
