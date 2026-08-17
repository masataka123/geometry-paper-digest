---
layout: paper
title: "Foliated Minimal Models and Flops"
title_ja: "葉層付き極小モデルとフロップ"
authors: "Paolo Cascini, Roktim Mascharak, Calum Spicer"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DS
arxiv_abstract: >-
  We study minimal models and flops for foliations. We show that if $\mathcal F$ is a rank one
  foliation with canonical singularities on a normal projective $\mathbb Q$-factorial variety and
  $K_{\mathcal F}$ is pseudo-effective, then any two outputs of the $K_{\mathcal F}$-MMP are
  isomorphic. For co-rank one foliations on threefolds, we prove existence results for $D$-flops in
  the klt setting and, under additional hypotheses, in the F-dlt setting. By contrast, we construct
  examples showing that rank one foliations display pathologies absent from the classical MMP:
  flopping contractions need not admit $D$-flops, and nef and big canonical divisors need not give
  rise to canonical models, even in the category of algebraic spaces.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - minimal-model-program
  - vector-bundles-sheaves
  - foliations
arxiv_id: "2608.09663v1"
arxiv_url: "https://arxiv.org/abs/2608.09663"
arxiv_submitted: "2026-08-10"
arxiv_updated: "2026-08-10"
summary: >-
  canonical特異点を持つ階数1葉層では、葉層標準因子のMMPの出力が同型まで一意であることを証明する。一方、3次元余階数1葉層にはkltおよび一定のF-dlt条件下でフロップの存在を示し、階数1では古典的MMPにないフロップ非存在やbase-point-free型の病理も構成する。
abstract_en: >-
  We study minimal models and flops for foliations. We show that if $\mathcal F$ is a rank one foliation with canonical singularities on a normal projective $\mathbb Q$-factorial variety and $K_{\mathcal F}$ is pseudo-effective, then any two outputs of the $K_{\mathcal F}$-MMP are isomorphic. For co-rank one foliations on threefolds, we prove existence results for $D$-flops in the klt setting and, under additional hypotheses, in the F-dlt setting. By contrast, we construct examples showing that rank one foliations display pathologies absent from the classical MMP: flopping contractions need not admit $D$-flops, and nef and big canonical divisors need not give rise to canonical models, even in the category of algebraic spaces.
summary_en: ""
abstract_ja: >-
  葉層の極小モデルとフロップを研究する。canonical特異点を持つ階数1葉層が正規射影 $\mathbb Q$-factorial 多様体上にあり、$K_{\mathcal F}$ が擬有効なら、$K_{\mathcal F}$-MMPの任意の二つの出力は同型である。3次元余階数1葉層には、kltの場合および追加条件付きF-dltの場合に $D$-フロップの存在を示す。他方、階数1葉層ではフロッピング収縮に $D$-フロップが存在しない例や、nefかつbigな標準因子が代数空間の範囲でも標準モデルを与えない例を構成する。
abstract_source_url: "https://arxiv.org/abs/2608.09663"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.09663](https://arxiv.org/abs/2608.09663)
- **著者:** Paolo Cascini, Roktim Mascharak, Calum Spicer
- **初回投稿日:** 2026年8月10日
- **最終更新日:** 2026年8月10日
- **主分類・副分類:** math.AG（主分類）, math.DS
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

通常の双有理幾何では、同じ対から得られる極小モデルはフロップの有限列で結ばれる。葉層付きMMPでも同様か、という問いに対し、本論文は階数1と余階数1で対照的な像を示す。

canonical特異点を持つ階数1葉層では、$K_{\mathcal F}$-MMPの二つの出力はフロップで異なるどころか、写像と整合する同型で一致する。古典的MMPより強い剛性である。

余階数1の3次元葉層については、klt葉層対の小収縮に $D$-フロップが存在する。F-dltの場合も、例外曲線とseparatrixに具体的条件を置いて存在を示す。

ただし階数1葉層が常に良く振る舞うわけではない。フロッピング収縮があっても対応するフロップが存在しない例、$K_{\mathcal F}$ がnefかつbigでもnull locusを代数空間としてさえ収縮できない例を構成し、葉層MMP固有の限界を明らかにする。

## 背景と問題設定

葉層 $\mathcal F$ の接層 $T_{\mathcal F}\subset T_X$ は飽和かつLie括弧で閉じた連接部分層である。$K_{\mathcal F}$ が擬有効なとき、その極小モデルを作る $K_{\mathcal F}$-MMP が考えられる。

余階数1葉層の既知研究では、共通の3次元F-dlt葉層対から得られる一般型の極小モデルがフロップ列で結ばれることが知られていた。本論文は、階数1では出力がさらに一意になる一方、個々のフロップの存在や標準モデルには新たな病理があることを示す。

## 主結果

### 階数1極小モデルの一意性（Theorem 1.1）

$X$ を正規射影 $\mathbb Q$-factorial 多様体、$\mathcal F$ をcanonical特異点を持つ階数1葉層とし、$K_{\mathcal F}$ は擬有効とする。二つの $K_{\mathcal F}$-MMP の出力

$$
f_1:X\dashrightarrow Y_1,\qquad f_2:X\dashrightarrow Y_2
$$

に対し、同型 $\varphi:Y_1\to Y_2$ が存在して

$$
f_2=\varphi\circ f_1
$$

となる。主張は余次元1での一致だけでなく、MMPの出力としての同型である。

### F-dlt余階数1葉層のフロップ（Theorem 1.2）

$X$ を滑らかな3次元多様体、$\mathcal F$ をF-dlt余階数1葉層、$f:X\to Z$ を $K_{\mathcal F}$-フロッピング収縮とする。$-D$ が $f$-ampleで、例外曲線 $C$ が既約、$C$ を含む正規separatrix $S_1$ があり、$-S_1$ が $f$-ampleなら、$D$-フロップが存在する。

### klt葉層対のフロップ（Theorem 1.3）

$X$ をkltな準射影3次元多様体、$(\mathcal F,\Delta)$ をklt余階数1葉層対とする。小収縮 $f:X\to Z$ に対し $K_{\mathcal F}+\Delta\equiv_f0$、$D\geq0$ かつ $-D$ が $f$-ampleなら、$D$-フロップが存在する。

### 病理的な反例

Introductionでは概略として次のように述べられている。canonicalな階数1葉層でもフロッピング収縮に $D$-フロップが存在しない例（Theorem 5.2）がある。また滑らかな射影3次元多様体上で $K_{\mathcal F}$ がnefかつbigなのに、そのnull locusを代数空間の圏でも収縮できない例（Theorem 5.3）がある。

## 証明の見取り図

階数1の一意性には、葉層不変部分多様体を含まない十分ampleな因子を選ぶBertini型命題を用いる。一般切断の葉層方向の高階jetが消えないことから不変部分多様体を排除し、二つのMMP出力の比較を剛性へつなげる。

余階数1のフロップでは、例外集合の形式近傍でseparatrixを境界因子に組み込み、通常のklt ample modelの構成へ還元する。例外曲線が葉層の特異集合に入る難しい場合にはCamacho–Sad指数を解析し、曲線とproperに交わる追加separatrixを得る。

反例はHilbert modular surface上の $\mathbb P^1$ 束とtautological foliationを使う。持ち上げを摂動してnull locus上に非abundantな葉層を残し、その非豊富性を収縮不能性の障害とする。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.09663](https://arxiv.org/abs/2608.09663)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.3, 5.2, 5.3
- **論文構成の説明:** Contents and Introduction, pp. 1–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
