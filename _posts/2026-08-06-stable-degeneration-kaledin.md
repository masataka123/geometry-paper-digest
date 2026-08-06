---
layout: paper
title: "Stable Degeneration, Non-degenerate Forms, and Kaledin's Conjecture"
title_ja: "安定退化・非退化形式・Kaledin予想"
authors: "Chenyang Xu, Ziquan Zhuang, Henri Guenancia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
  - math.RT
topic: algebraic-geometry
arxiv_id: "2606.02401v1"
arxiv_url: "https://arxiv.org/abs/2606.02401v1"
arxiv_submitted: "2026-06-01"
arxiv_updated: "2026-06-01"
summary: >-
  klt特異点のnormalized volume最小化付値が定める安定退化は、非退化反射的微分形式を保存する。これをsymplectic退化の剛性と組み合わせ、任意のsymplectic特異点の形式完備化が錐状であるというKaledin予想を証明する。
abstract_en: >-
  We prove that stable degeneration, the canonical degeneration associated to the normalized volume minimizer of a Kawamata log terminal (klt) singularity, preserves non-degenerate reflexive differential forms. In particular, the stable degeneration of a symplectic singularity is again symplectic. Combining this with a deformation-theoretic rigidity result for symplectic degenerations, we confirm Kaledin's conjecture that the formal completion of any symplectic singularity is conical. As applications, we show that the natural base of any normalized nilpotent orbit closure is a K-semistable Fano variety, and that the normalized volume minimizer of a hypertoric singularity is induced by the standard dilation.
summary_en: ""
abstract_ja: >-
  klt特異点のnormalized volume最小化付値に付随する標準的な安定退化が、非退化反射的微分形式を保存することを証明する。したがってsymplectic特異点の安定退化もsymplecticである。symplectic退化の変形論的剛性と合わせ、任意のsymplectic特異点の形式完備化が錐状であるというKaledin予想を解決する。さらにnilpotent orbit closureやhypertoric特異点のK安定性へ応用する。
abstract_source_url: "https://arxiv.org/abs/2606.02401v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.02401v1](https://arxiv.org/abs/2606.02401v1)
- **著者:** Chenyang Xu, Ziquan Zhuang（Appendix: Henri Guenancia）
- **初回投稿日・確認版更新日:** 2026年6月1日（v1）
- **主分類・副分類:** math.AG（主分類）, math.DG, math.RT
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

klt特異点 $x\in X$ ではnormalized volumeを最小化する準monomial付値 $v_0$ が一意に存在し、有限生成な随伴次数環からK-semistable Fano cone $X_0$ が得られる。これが安定退化であり、論文は元の特異点の微分形式が退化後にも非退化であり続けることを示す。

反射的 $p$-形式 $\sigma$ の非退化性は、$p\mid n$ のもとで $\sigma^{n/p}$ が滑らかな部分上の標準束を消えずに生成することを意味する。この性質が安定退化で保存されるので、閉な非退化2形式を持つsymplectic特異点は再びsymplecticへ退化する。

この保存定理とsymplecticなspecial degenerationの剛性から、任意のsymplectic特異点は形式的にconical symplectic singularityと同型であると結論する。さらに後者がK-semistable Fano coneであることも示し、Kaledin予想を局所K安定性と結びつける。

## 背景と問題設定

安定退化はnormalized volume最小化子が与える標準的な錐状モデルだが、元の特異点が持つ追加構造がそこへ移るとは自明でない。とくに非退化形式では、特殊化した形式に零点が生じないことを付値論的に制御する必要がある。

## 主結果

### 非退化形式の保存（Theorem 1.1 / Theorem 5.11）

klt特異点 $x\in X$ と安定退化 $x_0\in X_0$ に対し、非退化反射的 $p$-形式

$$\sigma\in H^0(X,\Omega_X^{[p]})$$

は、$X_0$ 上の非退化形式 $\sigma_0\in H^0(X_0,\Omega_{X_0}^{[p]})$ へ特殊化する。閉性も保存されるため、symplectic特異点の安定退化はsymplecticである。

### Kaledin予想（Theorem 1.2 / Corollary 6.3）

すべてのsymplectic特異点は形式的にconical symplectic singularityと同型であり、すべてのconical symplectic singularityはK-semistable Fano coneである。Artin近似とAppendixの一意性を合わせると、解析的な錐状性も導かれる。

### 具体的特異点への応用

Introductionでは、normalized nilpotent orbit closureの自然な底がK-semistable Fano多様体であること、およびhypertoric singularityのnormalized volume最小化子が標準的dilationから誘導されることが主要応用として述べられる。

## 証明の見取り図

形式 $\sigma$ に対するlog discrepancy $A_\sigma$ を導入し、特殊化後の非退化性を付値不等式へ翻訳する。最小化子がKollár componentの場合はlog Fano対のorbifold cotangent sheafのcanonical extensionの半安定性から不等式を得る。一般の準monomial最小化子はKollár componentで近似し、安定性閾値が1へ近づくこととlog discrepancyの局所線形性で極限へ移す。最後にsymplectic special degenerationの剛性を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.02401v1](https://arxiv.org/abs/2606.02401v1)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems 1.1–1.5
- **確認したarXivバージョン:** v1（指定版。Abstractページ上の最新はv2）
- **source_scope:** Abstract and Introduction
