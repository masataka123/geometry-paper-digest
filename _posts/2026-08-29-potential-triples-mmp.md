---
layout: paper
title: "On minimal model program and Zariski decomposition of potential triples"
title_ja: "potential tripleの極小モデル・プログラムとZariski分解"
authors: "Sung Rak Choi, Sungwook Jang, Dae-Won Lee"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this paper, we investigate properties of potential triples $(X,Δ,D)$ which consists of a pair $(X,Δ)$ and a pseudoeffective $\mathbb{R}$-Cartier divisor $D$. In particular, we show that if $D$ admits a birational Zariski decomposition, then one can associate a generalized pair structure to the potential triple $(X,Δ,D)$. Moreover, we can run the generalized MMP on $(K_X+Δ+D)$ as special cases. As an application, we also show that for a pklt pair $(X,Δ)$, if $-(K_X+Δ)$ admits a birational Zariski decomposition with $\mathrm{NQC}$ positive part, then there exists a $-(K_X+Δ)$-minimal model.
topic: algebraic-geometry
tags:
  - birational-geometry
  - minimal-model-program
  - singularities
  - positivity
arxiv_id: "2502.00790v1"
arxiv_url: "https://arxiv.org/abs/2502.00790"
arxiv_submitted: "2025-02-02"
arxiv_updated: "2025-02-02"
summary: >-
  対$(X,\Delta)$に擬有効$\mathbb R$-Cartier因子$D$を加えたpotential tripleを扱う。$D$が双有理Zariski分解をもつときgeneralized pairへ移し替え、$(K_X+\Delta+D)$に関するMMPを走らせる条件と反標準因子への応用を与える。
abstract_en: ""
summary_en: >-
  The paper develops a minimal-model framework for a pair together with an additional pseudoeffective real Cartier divisor. When that divisor has a birational Zariski decomposition, the data can be encoded as a generalized pair. This permits a generalized minimal model program for the combined adjoint divisor under stated singularity assumptions. Applications include the existence of an anticanonical minimal model for potentially klt pairs with an NQC positive part.
abstract_ja: >-
  対$(X,\Delta)$と擬有効$\mathbb R$-Cartier因子$D$からなるpotential tripleの性質を調べる。$D$が双有理Zariski分解をもてばgeneralized pair構造を対応させられ、特別な場合に$K_X+\Delta+D$のgeneralized MMPを実行できる。pklt対では、$-(K_X+\Delta)$の分解の正部分がNQCなら反標準極小モデルが存在する。
abstract_source_url: "https://arxiv.org/abs/2502.00790"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.00790v1](https://arxiv.org/abs/2502.00790)
- **著者:** Sung Rak Choi, Sungwook Jang, Dae-Won Lee
- **初回投稿日:** 2025年2月2日
- **最終更新日:** 2025年2月2日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

generalized pairでは付加的な因子がb-nef因子のtraceとして与えられる。本論文のpotential triple $(X,\Delta,D)$では$D$を単に擬有効な$\mathbb R$-Cartier因子とし、より広い枠組みで特異点とMMPを考える。

中心的仮定は$D$が双有理Zariski分解$f^*D=P+N$をもつことである。この分解からgeneralized pairを構成し、potential log canonicalな状況で非klt locusの閉性と$(K_X+\Delta+D)$-MMPの実行可能性を得る。

さらに$D$がbigでaugmented base locusがplc centerを含まない場合にもMMPを実行できる。反標準因子へ適用すると、NQC正部分をもつpklt対に反標準極小モデルが存在する。

## 背景と問題設定

potential log discrepancyは通常のlog discrepancyから$D$の漸近的因子付値を引いて定義され、pkltやplcといった特異点概念を与える。目標は$(K_X+\Delta+D)$-negativeな双有理収縮を構成することであるが、途中の$D$がnefになるまでは通常のgeneralized pairのMMPへ直ちに還元できない。

## 主結果

### 双有理Zariski分解からのMMP（Theorem 1.1）

potential triple $(X,\Delta,D)$について

$$
f^*D=P+N
$$

という双有理Zariski分解が存在するとする。plcならpotential non-klt locus $\operatorname{pNklt}(X,\Delta,D)$はZariski閉である。さらに$X$が$\mathbb Q$-factorialなら$(K_X+\Delta+D)$-MMPを実行できる。

### 反標準極小モデル（Corollary 1.2）

$(X,\Delta)$が$\mathbb Q$-factorial pklt対で、$-(K_X+\Delta)$がNQC正部分をもつ双有理Zariski分解を許すなら、$-(K_X+\Delta)$-minimal modelが存在する。

### bigな付加因子の場合（Theorem 1.3）

$D$をbigな$\mathbb Q$-Cartier因子とし、$\mathbf B_+(D)$がplc centerを含まないとする。このとき$D'\sim_{\mathbb Q}D$となる有効因子を選んで$(X,\Delta+D')$をlc対にでき、

$$
\operatorname{pNklt}(X,\Delta,D)=\operatorname{Nklt}(X,\Delta+D')
$$

が成り立つ。加えて$(K_X+\Delta+D)$-MMPを実行できる。

## 証明の見取り図

双有理Zariski分解の負部分を境界へ、正部分をnefなb-divisor側へ移し、potential tripleをgeneralized pair $(X,(\Delta+f_*N)+f_*P)$として符号化する。これによりgeneralized pairに対するMMPの既存理論を利用する。bigな場合は基底 locusがplc centerを避ける仮定から有効な代表$D'$を選び、通常のlc対の非klt locusとpotential non-klt locusを一致させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2502.00790](https://arxiv.org/abs/2502.00790)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollary 1.2, Theorem 1.3
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
